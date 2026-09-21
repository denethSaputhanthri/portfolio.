import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects, projectFilters } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects">
      <div className="section-divider" />

      <div className="section-container">
        <SectionTitle
          label="Projects"
          title="Featured work"
          description="Some of the projects I've built and contributed to."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-accent text-bg"
                  : "bg-card border border-border text-text-secondary hover:text-text-primary hover:border-border-hover"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted text-sm">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
