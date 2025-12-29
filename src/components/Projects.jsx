// src/components/Projects.jsx
const projects = [

  {
    title: "Projet Scoring – Analyse du risque de défaut de remboursement de banque",
    description:
      "Développement d’un modèle prédictif permettant d’évaluer le risque de défaut de remboursement lors des demandes de prêt. Le projet couvre le prétraitement des données, l’entraînement des modèles, l’évaluation des performances et le déploiement de la solution.",
    tech: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Docker",
      "Scikit-learn",
    ],
    link:"https://github.com/ASSOUMOU7/Credit_banque"
  },
  {
    title: "Projet Visualisation – Analyse des retours produits (E-commerce)",
    description:
      "Conception d’un tableau de bord interactif permettant d’identifier et d’analyser les principales raisons des retours de produits dans une entreprise de e-commerce, afin d’améliorer la qualité des produits et la satisfaction client.",
    tech: [
      "Power bin  ",
      "Python",
      "Tableau de bord interactif",
      "Analyse exploratoire des données",
      "Data Visualization",
    ],
    link:"https://github.com/ASSOUMOU7/Tableua_de_bord_power_bi"
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
    link:"https://meteo20.shinyapps.io/data/ "
  },
  {
    title : "Projet-scoring Analyse des principaux facteurs influencant la satisfaction ou l'insatisfaction des passagers d'une compagnie aérienne",
    description:
      "1. **Identifier les principaux facteurs** qui influencent la satisfaction ou l’insatisfaction des passagers à partir d’une enquête collectée auprès d’une compagnie aérienne. 2. **Construire un modèle prédictif performant** capable d’anticiper le niveau de satisfaction d’un passager selon ses caractéristiques et son expérience de vol.",
  tech:[
      "Python",
      "Machine Learning",
      "Streamlit",
      "Docker",
      "Scikit-learn",
    ],
    link:"https://github.com/ASSOUMOU7/projet_a-rien"

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
            <a
              href={project.link}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
