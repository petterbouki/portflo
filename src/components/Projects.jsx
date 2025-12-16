// src/components/Projects.jsx
const projects = [
  {
    title: "Dashboard React",
    description: "Dashboard analytique responsive avec graphiques et filtres.",
    tech: ["React", "Chart.js", "CSS Grid"],
  },
  {
    title: "Landing page SaaS",
    description: "Page marketing moderne avec animations et A/B testing.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Portfolio créatif",
    description: "Site personnel avec thème sombre et glassmorphism.",
    tech: ["React", "CSS moderne"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projets</h2>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.title} className="card glass">
            <h3>{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <div className="card-tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
