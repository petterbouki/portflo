// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ton Nom. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="https://github.com/ton-github" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ton-linkedin" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
