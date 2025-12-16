// src/components/Education.jsx
const diplomas = [
  {
    title: "Master Informatique",
    school: "Université X",
    period: "2022 — 2024",
    details: "Spécialité Génie logiciel, projets React et architectures modernes.",
  },
  {
    title: "Licence Informatique",
    school: "Université Y",
    period: "2019 — 2022",
    details: "Développement web, bases de données, algorithmes et POO.",
  },
  {
    title: "Baccalauréat Scientifique",
    school: "Lycée Z",
    period: "2018 — 2019",
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
