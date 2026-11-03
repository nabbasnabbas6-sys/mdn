import React from 'react';
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

const phoneNumber = '+213553125191';
const whatsappNumber = phoneNumber.replace('+', '');
const whatsappMessage = encodeURIComponent('Bonjour, je souhaite passer une commande.');
const instagramUrl =
  'https://www.instagram.com/_saveurs_de_la_maison_?rpxt=MWl4ZGd2cDJqdWp3eg==';
const facebookUrl = 'https://www.facebook.com/share/1dHdTmP33r/';

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="contact-card" aria-labelledby="brand-name">
        <div className="card-content">
          <div className="brand-mark" aria-hidden="true">
            <span>SM</span>
          </div>

          <p className="eyebrow">Fait avec amour, à la maison</p>
          <h1 id="brand-name">Saveurs de<br />la Maison</h1>
          <p className="intro">
            Une petite douceur pour chaque grand moment.
            <br />
            Retrouvez-nous et parlons de vos envies.
          </p>

          <div className="contact-actions" aria-label="Moyens de contact">
            <a
              className="action-button whatsapp-button"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            >
              <MessageCircle size={19} aria-hidden="true" />
              <span>Écrire sur WhatsApp</span>
              <ArrowUpRight className="button-arrow" size={17} aria-hidden="true" />
            </a>
            <a className="action-button call-button" href={`tel:${phoneNumber}`}>
              <Phone size={18} aria-hidden="true" />
              <span>Nous appeler</span>
              <ArrowUpRight className="button-arrow" size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="social-links" aria-label="Réseaux sociaux">
            <a
              className="social-link"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Saveurs de la Maison"
            >
              <Instagram size={19} aria-hidden="true" />
            </a>
            <a
              className="social-link"
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Saveurs de la Maison"
            >
              <Facebook size={19} aria-hidden="true" />
            </a>
          </div>

          <div className="location-note">
            <MapPin size={15} aria-hidden="true" />
            <span>Contactez-nous pour vos commandes</span>
          </div>
        </div>

      </section>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} Saveurs de la Maison</span>
        <span className="footer-dot" aria-hidden="true">·</span>
        <span>Une touche de douceur</span>
      </footer>
    </main>
  );
}

export default App;
