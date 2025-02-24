import styles from './ContactStyles.module.css';
import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mqaewynz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("Mensagem enviada com sucesso!");
      } else {
        setFormStatus("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      setFormStatus("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {formStatus && <p>{formStatus}</p>} {/* Exibe o status de envio */}
    </section>
  );
}

export default Contact;
