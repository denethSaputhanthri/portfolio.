import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/experience";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education">
      <div className="section-divider" />
      <div className="section-container">
        <SectionTitle
          label="Education"
          title="Academic background"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent-muted flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-0.5">
                    {edu.status}
                  </p>
                </div>
              </div>

              {/* Focus areas */}
              <div className="mt-5 pt-5 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} className="text-text-muted" />
                  <span className="text-xs text-text-muted uppercase tracking-wider font-medium">
                    Focus Areas
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 text-xs font-mono rounded-md bg-bg-secondary text-text-secondary border border-border"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
