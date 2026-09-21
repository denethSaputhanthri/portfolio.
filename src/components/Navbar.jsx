import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between ">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-text-primary font-bold text-lg tracking-tight hover:text-accent transition-colors duration-300 "
        >
          <span className="text-accent font-mono">{"<"}</span>
          {profile.firstName.toUpperCase()}
          <span className="text-accent font-mono">{" />"}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3.5 py-2 rounded-md text-md font-medium transition-all duration-300 ${activeSection === link.href.slice(1)
                ? "text-accent"
                : "text-text-secondary hover:text-text-primary"
                }`}
            >
              {link.label}
            </a>
          ))}

          {/* Status indicator */}
          <div className="ml-4 pl-4 border-l border-border flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            <span className="text-xs text-text-muted hidden lg:inline">
              Available
            </span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${activeSection === link.href.slice(1)
                      ? "text-accent bg-accent-muted"
                      : "text-text-secondary hover:text-text-primary hover:bg-card"
                    }`}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Status */}
              <div className="flex items-center gap-2 px-4 py-3 mt-2 border-t border-border">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
                <span className="text-xs text-text-muted">
                  {profile.status}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
