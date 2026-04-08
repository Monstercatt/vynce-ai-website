import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Solution", id: "solution" },
  { label: "Features", id: "features" },
  { label: "Industries", id: "industries" },
  { label: "Demo", id: "demo" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/vynce-logo.png"
            alt="Vynce AI"
            className="h-10 w-10 rounded-lg"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-foreground font-heading font-bold text-xl tracking-tight">
            Vynce AI
          </span>
        </a>

        {/* Center nav pill - Desktop */}
        <div
          className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-muted/80 backdrop-blur-2xl border border-border/40 shadow-lg shadow-black/20"
              : "bg-muted/50 backdrop-blur-xl border border-border/20"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="px-5 py-2 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 ease-in-out"
            >
              {item.label}
            </button>
          ))}
        </div>



        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            className={`p-3 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-muted/80 backdrop-blur-2xl border border-border/40"
                : "bg-muted/50 backdrop-blur-xl border border-border/20"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} className="text-foreground" /> : <Menu size={20} className="text-foreground" />}
          </button>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                className="absolute top-full mt-3 right-6 bg-muted/90 backdrop-blur-2xl border border-border/40 rounded-2xl p-3 min-w-[200px] shadow-xl shadow-black/30 flex flex-col gap-1"
              >
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
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