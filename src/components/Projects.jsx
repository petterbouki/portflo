// src/components/Projects.jsx
const projects = [
  {
    title: "Participation au DataTour 2025 – Data Afrique Hub",
    description:
      "Défi de Data Science portant sur la prédiction du risque de défaut de crédit bancaire à l’aide de modèles de machine learning supervisé (classification). L’objectif était d’évaluer la probabilité de non-remboursement des prêts afin d’aider à la prise de décision bancaire.",
    tech: [
      "Machine Learning (classification)",
      "Python",
      "LightGBM / Random Forest / XGBoost",
      "Analyse du risque de crédit",
      "Visualisation des résultats",
    ],
  },
  {
    title: "Projet Scoring – Analyse du risque de défaut de remboursement",
    description:
      "Développement d’un modèle prédictif permettant d’évaluer le risque de défaut de remboursement lors des demandes de prêt. Le projet couvre le prétraitement des données, l’entraînement des modèles, l’évaluation des performances et le déploiement de la solution.",
    tech: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Docker",
      "Scikit-learn",
    ],
  },
  {
    title: "Projet Visualisation – Analyse des retours produits (E-commerce)",
    description:
      "Conception d’un tableau de bord interactif permettant d’identifier et d’analyser les principales raisons des retours de produits dans une entreprise de e-commerce, afin d’améliorer la qualité des produits et la satisfaction client.",
    tech: [
      "Excel",
      "Python",
      "Tableau de bord interactif",
      "Analyse exploratoire des données",
      "Data Visualization",
    ],
  },
  {
    title: "Développement d’une application Shiny – Données météorologiques CI (2022–2024)",
    description:
      "Analyse et visualisation des données climatiques multi-villes de la Côte d’Ivoire (température, précipitations, vent, humidité, UV). Développement d’une application Shiny interactive pour explorer les tendances climatiques et aider à la prise de décision, incluant la prédiction de la température.",
    tech: [
      "R",
      "Shiny",
      "Analyse de séries temporelles",
      "ARIMA / SARIMA",
      "Visualisation de données climatiques",
    ],
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
