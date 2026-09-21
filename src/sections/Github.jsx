import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { profile } from "../data/profile";
import { ExternalLink, GitFork } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export default function GithubSection() {
  return (
    <section id="github">
      <div className="section-divider" />
      <div className="section-container">
        <SectionTitle
          label="Open Source"
          title="GitHub & Contributions"
          description="Building in public. Learning continuously. Contributing when I can."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — GitHub profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent-muted flex items-center justify-center">
                <GithubIcon size={26} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {profile.name}
                </h3>
                <p className="text-sm text-text-muted font-mono">
                  @denethSaputhanthri
                </p>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              I share my projects and explorations on GitHub. From full-stack
              applications to experiments with AI integration — most of my work
              is open source and available for learning and collaboration.
            </p>

            <Button
              href={profile.github}
              variant="outline"
              icon={GithubIcon}
              iconRight={ExternalLink}
            >
              View Profile
            </Button>
          </motion.div>

          {/* Right — Contribution-style visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6 font-mono">
              Contribution Activity
            </h3>

            {/* Simulated contribution grid */}
            <div className="mb-8">
              <div className="grid grid-cols-[repeat(20,1fr)] gap-1">
                {Array.from({ length: 140 }).map((_, i) => {
                  // Deterministic pseudo-random based on index
                  const intensity = [0, 0, 0, 1, 1, 2, 3][i % 7];
                  const colors = [
                    "bg-bg-secondary",
                    "bg-accent/20",
                    "bg-accent/40",
                    "bg-accent/70",
                  ];
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-sm ${colors[intensity]}`}
                    />
                  );
                })}
              </div>
              <p className="text-xs text-text-muted mt-3">
                Activity visualization — visit GitHub for real-time data
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary font-mono">
                  10+
                </div>
                <div className="text-xs text-text-muted mt-1">
                  Repositories
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary font-mono">
                  5+
                </div>
                <div className="text-xs text-text-muted mt-1">
                  Technologies
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <GitFork size={16} className="text-accent" />
                </div>
                <div className="text-xs text-text-muted mt-1">
                  Open Source
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
