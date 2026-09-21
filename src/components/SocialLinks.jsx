import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/profile";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
};

const labelMap = {
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "Email",
};

export default function SocialLinks({ size = 18, className = "" }) {
  const { social } = profile;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {Object.entries(social).map(([key, value]) => {
        const Icon = iconMap[key];
        const label = labelMap[key];
        const href = key === "email" ? `mailto:${value}` : value;

        return (
          <a
            key={key}
            href={href}
            target={key !== "email" ? "_blank" : undefined}
            rel={key !== "email" ? "noopener noreferrer" : undefined}
            className="text-text-muted hover:text-accent transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
