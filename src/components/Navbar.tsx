import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const scrollItems = [
  { label: "Solution", id: "solution" },
  { label: "Features", id: "features" },
  { label: "Industries", id: "industries" },
  { label: "Demo", id: "demo" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const pageItems = [
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPage = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      // We moved the background classes out of the motion.nav to avoid transform conflicts
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      {/* Safari Fix: Dedicated background layer for the main Nav */}
      <div 
        className={`absolute inset-0 z-[-1] transition-all duration-500 border-b ${
          scrolled 
            ? "bg-[#060608]/40 border-white/10" 
            : "bg-transparent border-transparent"
        }`}
        style={{ 
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          backdropFilter: scrolled ? "blur(24px)" : "none"
        }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center relative px-6 py-4">
        {/* Logo + Brand Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 flex-shrink-0 z-10 md:absolute md:left-4 lg:left-0"
        >
          <img
            src="/vynce-logo.png"
            alt="Vynce AI"
            className="h-10 w-10 rounded-lg"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-foreground font-heading font-bold text-xl tracking-tight text-white">
            Vynce AI
          </span>
        </a>

        {/* Center nav items - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {scrollItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 ease-in-out"
            >
              {item.label}
            </button>
          ))}
          {pageItems.map((item) => (
            <button
              key={item.label}
              onClick={() => goToPage(item.path)}
              className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 ease-in-out"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden z-10">
          <button
            className="p-3 rounded-full hover:bg-white/10 transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                // SOLUTION HERE: Removed scale and y transforms. Only animating opacity.
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[110%] right-0 min-w-[200px] flex flex-col gap-1 p-3 shadow-xl shadow-black/30 rounded-2xl"
              >
                {/* Safari Fix: Dedicated background layer for the Dropdown */}
                <div 
                  className="absolute inset-0 z-[-1] rounded-2xl bg-[#060608]/60 border border-white/10"
                  style={{ 
                    WebkitBackdropFilter: "blur(24px)",
                    backdropFilter: "blur(24px)"
                  }}
                />

                {scrollItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 relative z-10"
                  >
                    {item.label}
                  </button>
                ))}
                {pageItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => goToPage(item.path)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 relative z-10"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;