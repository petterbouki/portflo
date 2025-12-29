// src/components/Profile.jsx
import moi from "../assets/assoi.jpg"; 


const Profile = () => {
  return (
    <section id="profile" className="section hero-section glass">
      <div className="hero-text">
        <p className="hero-tag">Data Scientist</p>
        <h2>
          Salut, c’est <span className="accent">Assoumou Bruno</span>
        </h2>
        <p className="hero-sub">
          Étudiant en Master Data Science à l’Université Félix Houphouët-Boigny, titulaire d’une licence en Mathématiques et Applications. Passionné par l’analyse de données , je souhaite mettre mes compétences en statistique, modélisation et data analysist au service d'une entreprise dynamique et innovante . Rigoureux, curieux et motivé, je cherche un stage pour contribuer à l’analyse du risque, la segmentation client ou la décision stratégique basée sur les données.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn-outline">
            Me contacter
          </a>
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <img src={moi} alt="Photo de profil" className="hero-photo" />
      </div>
    </section>
  );
};

export default Profile;