import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-text-primary font-bold text-lg tracking-tight hover:text-accent transition-colors duration-300"
            >
              <span className="text-accent font-mono">{"<"}</span>
              {profile.firstName.toUpperCase()}
              <span className="text-accent font-mono">{" />"}</span>
            </a>
            <p className="text-sm text-text-muted mt-2">{profile.role}</p>
          </div>

          {/* Quick links */}
          
          <div className="flex flex-row gap-3 justify-center">
            {["About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="sm:text-right">
            <span className="text-xs text-text-muted uppercase tracking-wider font-medium block mb-3">
              Social
            </span>
            <SocialLinks className="sm:justify-end" />
            <p className="text-xs text-text-muted mt-5">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
