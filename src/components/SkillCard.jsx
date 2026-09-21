import { motion } from "framer-motion";
import * as icons from "lucide-react";

export default function SkillCard({ skill, index }) {
  const Icon = icons[skill.icon] || icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border hover:border-accent/30 hover:bg-card-hover transition-all duration-300 cursor-default"
    >
      <Icon size={16} className="text-accent shrink-0" />
      <span className="text-sm text-text-secondary font-medium">
        {skill.name}
      </span>
    </motion.div>
  );
}
