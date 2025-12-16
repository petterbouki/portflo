// src/components/Sidebar.jsx
// Tu peux remplacer "TN" par tes initiales ou une petite photo plus tard
const Sidebar = () => {
  return (
    <aside className="sidebar glass">
      <div className="sidebar-top">
        <div className="sidebar-avatar">AB</div>
        <div>
          <h1 className="sidebar-name">Assoumou OI Assoumou Bruno</h1>
          <p className="sidebar-role">Data Scientist</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <a href="#profile">Profil</a>
        <a href="#education">Diplômes</a>
        <a href="#work">Expérience</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </aside>
  );
};

export default Sidebar;

