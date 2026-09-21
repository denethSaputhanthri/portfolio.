import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Folder } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, index }) {
  const { title, description, technologies, github, demo, image } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover transition-all duration-300"
    >
      {/* Project Image / Placeholder */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-bg-secondary border-b border-border">
        {image ? (
          <img
            src={image}
            alt={""}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-secondary to-card">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent-muted border border-accent/10 flex items-center justify-center">
                <Folder size={24} className="text-accent" />
              </div>
              <span className="text-text-muted text-xs font-mono tracking-wide">
                {title}
              </span>
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-secondary text-text-muted border border-border"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 5 && (
            <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-secondary text-text-muted border border-border">
              +{technologies.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-300"
              aria-label={`View ${title} source code on GitHub`}
            >
              <GithubIcon size={14} />
              <span>Source</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-300"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={14} />
              <span>Demo</span>
            </a>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-xs text-text-muted group-hover:text-accent transition-colors duration-300">
            View
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
