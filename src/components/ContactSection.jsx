import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { contactItems } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';

const INIT = { from_name: '', reply_to: '', subject: '', message: '' };

function ContactSection() {
  const [fields, setFields] = useState(INIT);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
        fields,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus('success');
      setFields(INIT);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="contact" id="kontakt">
      <div className="section-inner">
        <div className="section-eyebrow">Napište nám</div>
        <h2 className="section-title">Kontaktujte nás</h2>
        <p className="section-sub">Zájem o spolupráci nebo otázka? Rádi se vám ozveme zpět.</p>

        <div className="contact-grid">
          <div>
            <div className="c-name">Ing. Ivana Petrovická</div>
            <div className="c-role">Daňový poradce · č. osv. 4625</div>

            {contactItems.map(({ label, value, icon }) => (
              <div className="c-item" key={label}>
                <div className="c-ico">
                  <Icon paths={icon} />
                </div>
                <div>
                  <div className="c-lbl">{label}</div>
                  <div className="c-val">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Jméno</label>
                <input
                  id="contact-name"
                  name="from_name"
                  type="text"
                  placeholder="Jana Nováková"
                  value={fields.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">E-mail</label>
                <input
                  id="contact-email"
                  name="reply_to"
                  type="email"
                  placeholder="vas@email.cz"
                  value={fields.reply_to}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Předmět</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Dotaz / zájem o spolupráci"
                value={fields.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Zpráva</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Napište nám, jak vám můžeme pomoci..."
                value={fields.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'success' && (
              <p className="form-feedback form-feedback--ok">
                Zpráva byla odeslána. Ozveme se vám co nejdříve.
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-feedback--err">
                Odeslání se nepodařilo. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
              </p>
            )}

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Odesílám…' : 'Odeslat zprávu'}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
