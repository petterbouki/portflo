// src/components/Shell.jsx
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Education from "./Education";
import Work from "./Work";
import Footer from "./Footer";
import Projects from "./Projects";
import Gallery from "./Gallery"; // <-- nouveau
import Contact from "./Contact";

const Shell = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Profile />
        <Education />
        <Work />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
};

export default Shell;

