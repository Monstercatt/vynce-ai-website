import { Mail, Globe, MapPin } from "lucide-react";

const products = ["AI Chat Agents", "Customer Support Automation", "Analytics Dashboard", "Sales Automation"];
const services = ["AI Automation Setup", "Workflow Optimization", "Business Process Automation", "Custom AI Development"];

const Footer = () => (
  <footer className="border-t border-border/30 bg-card/30">
    <div className="container mx-auto px-4 md:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Section */}
        <div className="md:pr-6">
          <div className="flex items-center gap-3 mb-6">
            {/* Added Logo on the left */}
            <img 
              src="/vynce-logo.png" 
              alt="Vynce AI Logo" 
              className="h-10 w-auto object-contain" 
            />
            {/* Main text in bright white */}
            <h3 className="font-heading text-2xl font-extrabold text-white tracking-wide uppercase">
              VYNCE AI
            </h3>
          </div>
          {/* Faint white text below */}
          <p className="text-[15px] text-white/60 leading-relaxed">
            AI-powered business automation to accelerate growth and scale operations.
          </p>
        </div>

        {/* Products Section */}
        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-6">Products</h4>
          {/* Increased space-y to match the airy spacing in the screenshot */}
          <ul className="space-y-4">
            {products.map((item) => (
              <li 
                key={item} 
                className="text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer inline-block w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-6">Services</h4>
          <ul className="space-y-4">
            {services.map((item) => (
              <li 
                key={item} 
                className="text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer inline-block w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-[15px] text-white/60 group">
              <Mail className="h-5 w-5 text-white/60 group-hover:text-white transition-colors shrink-0" />
              <a 
                href="mailto:vynceai04@gmail.com" 
                className="group-hover:text-white group-hover:translate-x-2 transition-all duration-300 ease-in-out inline-block"
              >
                vynceai04@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-[15px] text-white/60 group">
              <Globe className="h-5 w-5 text-white/60 group-hover:text-white transition-colors shrink-0" />
              <a 
                href="https://vynceai.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group-hover:text-white group-hover:translate-x-2 transition-all duration-300 ease-in-out inline-block"
              >
                vynceai.tech
              </a>
            </li>
            <li className="flex items-center gap-3 text-[15px] text-white/60">
              <MapPin className="h-5 w-5 text-white/60 shrink-0" />
              <span>India</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    {/* Bottom Copyright Section */}
    <div className="border-t border-white/10 py-8">
      <p className="text-center text-sm text-white/40">
        Â© 2026 Vynce AI. All rights reserved. Built with intelligence, security, and your success in mind.
      </p>
    </div>
  </footer>
);

export default Footer;