import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].name
  );

  const activeSkills = skillCategories.find(
    (cat) => cat.name === activeCategory
  );

  return (
    <section id="skills">
      <div className="section-divider" />

      <div className="section-container">
        <SectionTitle
          label="Skills"
          title="Technologies I work with"
          description="Tools and technologies I use to bring ideas to life."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${activeCategory === cat.name
                  ? "bg-accent text-bg"
                  : "bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid — compact badges */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {activeSkills?.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* All Skills Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h3 className="text-xs font-semibold text-accent mb-3 font-mono uppercase tracking-wider">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs text-text-muted px-2 py-1 rounded bg-bg-secondary border border-border"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
