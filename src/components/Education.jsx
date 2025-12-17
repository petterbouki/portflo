// src/components/Education.jsx
const diplomas = [
  {
    title: "Master 2 DATA SCIENCE",
    school: "Universit´e Felix Houphouet Boigny UFHB ",
    period: "2025 — 2026",
    details: "Spécialité Génie logiciel, projets React et architectures modernes.",
  },
  {
    title: "MASTER 1 DATA SCIENCE ",
    school: "Universit´e Felix Houphouet Boigny UFHB ",
    period: "2024 — 2025",
    details: "Développement web, bases de données, algorithmes et POO.",
  },
  {
    title: "LICENCE EN MATHEMATIQUE ET APPLICATIONS",
    school: "Universit´e Felix Houphouet Boigny UFHB ",
    period: "2023 — 2024",
    details: "Option Mathématiques, mention Bien.",
  },
  {
    title: "Baccalauréat C",
    school: "Lycée ",
    period: "2020 — 2021",
    details: "Option Mathématiques, mention Bien.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Diplômes</h2>
      <p className="section-text">
        Mon parcours académique dans l’informatique et le développement.
      </p>
      <div className="grid">
        {diplomas.map((item) => (
          <article key={item.title} className="card glass education-card">
            <div className="education-header">
              <h3>{item.title}</h3>
              <span className="education-period">{item.period}</span>
            </div>
            <p className="education-school">{item.school}</p>
            <p className="education-details">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
