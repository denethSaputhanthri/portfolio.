import { motion } from "framer-motion";

export default function SectionTitle({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      {label && (
        <span className="inline-block text-accent text-sm font-medium font-mono tracking-wider uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
