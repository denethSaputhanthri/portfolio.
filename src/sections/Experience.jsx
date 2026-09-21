import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { experiences } from "../data/experience";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-divider" />
      <div className="section-container">
        <SectionTitle
          label="Experience"
          title="Work experience"
          description="My professional journey and contributions."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-bg border-2 border-accent flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Content card */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-accent" />
                        <span className="text-sm text-accent font-medium">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-text-muted font-mono bg-bg-secondary px-3 py-1.5 rounded-md border border-border self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-secondary leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1.5 shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-bg-secondary text-text-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
