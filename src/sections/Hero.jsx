import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import Button from "../components/Button";
import Terminal from "../components/Terminal";
import { profile } from "../data/profile";
import { useEffect, useState } from "react";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for titles
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDisplayText(profile.titles[0]);
      return;
    }

    const currentTitle = profile.titles[titleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % profile.titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent text-sm font-mono tracking-wider mb-4">
                HELLO, I'M
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight">
                {profile.firstName}
                <span className="text-accent">.</span>
              </h1>
              <div className="h-9 mb-6">
                <span className="text-xl sm:text-2xl text-text-secondary font-light">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-6 bg-accent ml-1 align-middle animate-blink" />
              </div>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg mb-8">
                {profile.shortIntro}
              </p>


              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Button
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  href={profile.github}
                  icon={GithubIcon}
                >
                  GitHub
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {profile.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-2xl font-bold text-text-primary font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
