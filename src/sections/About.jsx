import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";
import { User, Briefcase, MapPin, GraduationCap, Target } from "lucide-react";

const infoIcons = {
  Name: User,
  Role: Briefcase,
  Focus: Target,
  Education: GraduationCap,
  Location: MapPin,
};

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-divider" />

      <div className="section-container">
        <SectionTitle
          label="About"
          title="Get to know me"
          description="A brief introduction to who I am and what I do."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Description (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {profile.about.description.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Current Focus tags */}
            <div className="mt-6">
              <p className="text-smd text-text-muted mb-3 font-medium">
                Currently focused on:
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.currentFocus.map((focus) => (
                  <span
                    key={focus}
                    className="px-5 py-1.5 text-xs font-mono rounded-md bg-accent-muted text-accent border border-accent/10 p-"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Info Card (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-xl p-5 sm:p-6">
              {Object.entries(profile.about.info).map(([key, value], i) => {
                const Icon = infoIcons[key] || User;
                return (
                  <div
                    key={key}
                    className={`flex items-center gap-4 py-3.5 ${
                      i !== Object.entries(profile.about.info).length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-text-muted uppercase tracking-wider">
                        {key}
                      </div>
                      <div className="text-sm text-text-primary font-medium mt-0.5 truncate">
                        {value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
