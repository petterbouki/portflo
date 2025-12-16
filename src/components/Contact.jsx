// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        Un projet, une idée, une opportunité&nbsp;? Envoie-moi un message.
      </p>
      <form
        className="contact-form card glass"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-row">
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
        </div>
        <textarea rows="4" placeholder="Message" required />
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;

