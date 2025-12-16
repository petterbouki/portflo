// src/components/Work.jsx
const jobs = [
  {
    role: "Frontend Developer",
    company: "Startup A",
    period: "2024 — Présent",
    summary:
      "Développement de dashboards, composants réutilisables et optimisation des performances.",
  },
  {
    role: "Stagiaire Développeur Web",
    company: "Agence B",
    period: "2023",
    summary:
      "Intégration de maquettes Figma, animation CSS et amélioration de l’UX.",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <h2 className="section-title">Expérience</h2>
      <div className="list">
        {jobs.map((job) => (
          <article key={job.role} className="card glass list-item">
            <div className="list-header">
              <h3>{job.role}</h3>
              <span className="list-period">{job.period}</span>
            </div>
            <p className="list-company">{job.company}</p>
            <p className="list-text">{job.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
