import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Reveal from './Reveal';

const INIT = { subject: '', message: '' };

function WhistleblowingSection() {
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
        import.meta.env.VITE_EMAILJS_NOTICE_TEMPLATE,
        { subject: fields.subject, message: fields.message },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus('success');
      setFields(INIT);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="whistleblowing" id="oznameni">
      <div className="section-inner">
        <div className="section-eyebrow">Vnitřní oznamovací systém</div>
        <h2 className="section-title">
          Oznamování podle AML zákona a zákona o ochraně oznamovatelů
        </h2>
        <p className="section-sub">
          Bezpečný kanál pro podání oznámení oprávněnými osobami v souladu s příslušnými právními
          předpisy.
        </p>

        <div className="notice-wrap">
          <Reveal className="notice-card">
            <p>
              <strong>Vnitřní oznamovací systém</strong> dle § 21/6/b AML zákona a dle zákona o
              ochraně oznamovatelů.
            </p>
            <p>
              Kontaktní osobou je stanovena <strong>Ing. Ivana Petrovická</strong>. Vyplněním
              formuláře níže je zaručeno doručení oznámení Ing. Ivaně Petrovické na e-mail{' '}
              <strong>petrovicka@danebezstarosti.cz</strong>. Oznámení je možné učinit také
              telefonicky nebo osobně.
            </p>
            <div className="notice-highlight">
              Systém je určen a oznámení je oprávněn učinit pouze zaměstnanec a osoba, která pro
              Daně bez starostí s.r.o. popř. přímo pro Ing. Ivanu Petrovickou koná v jiném než
              pracovněprávním vztahu, a to anonymně.
            </div>
            <p>
              Oznamovatel má zajištěnu ochranu totožnosti a zároveň má zajištěno, že vůči němu
              nebudou činěna žádná opatření v souvislosti s oznámením. Oznamovat je možné pouze
              pravdivé informace.
            </p>
            <p>
              Všechny údaje v souvislosti s podaným oznámením budou shromažďovány, uchovávány a
              zpracovány včetně osobních údajů v oznámení uvedených s ohledem na plnění zákonných
              povinností. Tuto skutečnost bere oznamovatel na vědomí.
            </p>
            <p>
              Oznámení o porušení povinnosti dle AML zákona a dle zákona o ochraně oznamovatelů
              bude předáno KDP ČR, FAÚ nebo Ministerstvu spravedlnosti dle toho, v jakém postavení
              bude příjemce oznámení Ing. Ivana Petrovická v daném vztahu vystupovat - zda jako
              daňový poradce, účetní či jiné.
            </p>
          </Reveal>

          <Reveal as="form" className="notice-form" delay={0.1} onSubmit={handleSubmit}>
            <h3>Formulář pro oznámení</h3>
            <div className="form-group">
              <label htmlFor="notice-subject">Předmět</label>
              <input
                id="notice-subject"
                name="subject"
                type="text"
                placeholder="Předmět oznámení"
                value={fields.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="notice-message">Zpráva</label>
              <textarea
                id="notice-message"
                name="message"
                placeholder="Popište oznámení co nejpřesněji..."
                value={fields.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'success' && (
              <p className="form-feedback form-feedback--ok">
                Oznámení bylo úspěšně odesláno.
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-feedback--err">
                Odeslání se nepodařilo. Zkuste to prosím znovu.
              </p>
            )}

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Odesílám…' : 'Odeslat oznámení'}
            </button>
            <p className="notice-note">
              Formulář neobsahuje pole pro jméno ani e-mail. Oznámení lze podat anonymně.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default WhistleblowingSection;
