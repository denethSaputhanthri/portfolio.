import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { services } from "../data/experience";
import * as icons from "lucide-react";

export default function Services() {
  return (
    <section id="services">
      <div className="section-divider" />
      <div className="section-container">
        <SectionTitle
          label="Services"
          title="What I do"
          description="Areas of expertise and the kind of work I focus on."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = icons[service.icon] || icons.Code;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-muted flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
