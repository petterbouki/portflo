// src/components/Work.jsx
const jobs = [
  {
    role: "Data Scientist / Machine Learning Engineer",
    company: "DataTour 2025 – Data Afrique Hub",
    period: "2025",
    summary:
      "Participation à un défi de Data Science portant sur la prédiction du risque de défaut de crédit bancaire. Mise en œuvre de modèles de machine learning supervisé (classification) pour prédire le défaut de paiement, analyse des résultats et collaboration au sein d’une équipe multiculturelle avec présentation finale devant un jury.",
  },
  {
    role: "Data Scientist / Machine Learning Engineer",
    company: "Défi IA 2025 – Mission ARIEL (ESA)",
    period: "2025",
    summary:
      "Participation à un défi scientifique international visant la prédiction de la présence d’eau et de nuages dans les atmosphères d’exoplanètes à partir de spectres infrarouges et visibles simulés. Analyse de spectres de transit exoplanétaires, prétraitement et ingénierie de variables, implémentation de modèles de classification binaire, évaluation des performances (ROC-AUC, accuracy, validation croisée) et interprétation des résultats dans un contexte scientifique.",
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
