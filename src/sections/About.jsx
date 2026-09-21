import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";
import { User, Briefcase, MapPin, GraduationCap, Target, ImageOff } from "lucide-react";

const infoIcons = {
  Name: User,
  Role: Briefcase,
  Focus: Target,
  Education: GraduationCap,
  Location: MapPin,
};

export default function About() {
  const [imgError, setImgError] = useState(false);

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
              <p className="text-sm text-text-muted mb-3 font-medium">
                Currently focused on:
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.currentFocus.map((focus) => (
                  <span
                    key={focus}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-accent-muted text-accent border border-accent/10"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Image Card + Info Card (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* ── Profile Image Card ── */}
            <div className="relative group rounded-xl overflow-hidden border border-border bg-card aspect-[4/3]">
              {!imgError && profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} profile photo`}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                /* Placeholder shown when no image or load fails */
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card gap-3">
                  {/* Styled initials avatar */}
                  <div className="w-20 h-20 rounded-full bg-accent-muted border-2 border-accent/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-accent font-mono select-none">
                      {profile.firstName.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-text-primary font-semibold text-sm">{profile.name}</p>
                    <p className="text-text-muted text-xs mt-1 font-mono">{profile.role}</p>
                  </div>
                  {/* Upload hint */}
                  <div className="flex items-center gap-1.5 text-xs text-text-muted/60 mt-1">
                    <ImageOff size={12} />
                    <span>Add photo to <code className="font-mono text-accent/70">public/profile.jpg</code></span>
                  </div>
                </div>
              )}

              {/* Accent corner accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Name badge overlay (bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-bg/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
                  <p className="text-xs font-semibold text-text-primary">{profile.name}</p>
                  <p className="text-xs text-accent font-mono">{profile.role}</p>
                </div>
              </div>
            </div>

            {/* ── Info Card ── */}
            {/* <div className="bg-card border border-border rounded-xl p-5 sm:p-6">
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
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
