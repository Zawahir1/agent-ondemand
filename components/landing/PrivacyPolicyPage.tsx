import React from 'react';
import Footer from './Footer';

interface PrivacyPolicyPageProps {
    onNavigate?: (page: string, anchor?: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
    return (
        <>
            <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-20 animate-in fade-in duration-700">

                <button onClick={() => onNavigate?.('home')} className="flex items-center gap-2 text-gray-500 hover:text-shore-blue transition-colors mb-12 group text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Torna alla Home
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shore-blue/10 border border-shore-blue/20 text-shore-blue text-[10px] font-mono uppercase tracking-widest mb-8">
                    Documento Legale
                </div>

                <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-gray-900 mb-4 leading-[0.95]">
                    Informativa sulla <br /><span className="text-gray-400">Privacy</span>
                </h1>
                <p className="text-gray-500 text-sm font-light mb-16">Ultimo aggiornamento: 12 Febbraio 2026</p>

                <div className="prose-custom space-y-12">

                    <Section title="1. Titolare del Trattamento">
                        <p>
                            Il titolare del trattamento dei dati è <strong>Sales on Demand S.r.l.</strong>, con sede legale in
                            Via Monte di Pietà 21, 20121 Milano (MI), Italia — P.IVA 10808470966.
                        </p>
                        <p>
                            Per qualsiasi richiesta relativa alla privacy, puoi contattarci all'indirizzo:{' '}
                            <a href="mailto:info@agentondemand.it" className="text-shore-blue hover:underline">info@agentondemand.it</a>
                        </p>
                    </Section>

                    <Section title="2. Dati Raccolti">
                        <p>Raccogliamo i seguenti dati personali esclusivamente tramite i moduli presenti sul sito:</p>
                        <ul>
                            <li><strong>Nome e Cognome</strong></li>
                            <li><strong>Indirizzo email</strong></li>
                            <li><strong>Numero di telefono</strong></li>
                            <li><strong>Indirizzo aziendale</strong></li>
                            <li><strong>Dettagli del progetto</strong> (testo libero fornito dall'utente)</li>
                        </ul>
                        <p>Non raccogliamo dati in modo automatico attraverso cookie di profilazione o strumenti di tracciamento di terze parti.</p>
                    </Section>

                    <Section title="3. Finalità del Trattamento">
                        <p>I dati raccolti vengono utilizzati esclusivamente per le seguenti finalità:</p>
                        <ul>
                            <li>Rispondere alle richieste di contatto e informazioni</li>
                            <li>Gestire le richieste di progetti personalizzati</li>
                            <li>Gestire le iscrizioni alla lista d'attesa</li>
                            <li>Fornire l'accesso alle demo dei nostri agenti vocali</li>
                        </ul>
                    </Section>

                    <Section title="4. Base Giuridica">
                        <p>
                            Il trattamento dei dati personali si basa sul <strong>consenso esplicito</strong> dell'utente,
                            espresso tramite la casella di spunta presente su ciascun modulo di raccolta dati,
                            ai sensi dell'articolo 6, paragrafo 1, lettera a) del Regolamento (UE) 2016/679 (GDPR).
                        </p>
                    </Section>

                    <Section title="5. Responsabili del Trattamento">
                        <p>
                            I dati raccolti vengono trasmessi e gestiti tramite <strong>MailerLite</strong> (MailerLite Limited,
                            Ground Floor, 71 Lower Baggot Street, Dublin 2, D02 P593, Ireland), che agisce in qualità
                            di responsabile del trattamento ai sensi dell'art. 28 del GDPR.
                        </p>
                        <p>
                            MailerLite adotta misure di sicurezza adeguate e aderisce alle clausole contrattuali standard
                            per il trasferimento dei dati.{' '}
                            <a href="https://www.mailerlite.com/gdpr-compliance" target="_blank" rel="noopener noreferrer" className="text-shore-blue hover:underline">
                                GDPR Compliance di MailerLite →
                            </a>
                        </p>
                    </Section>

                    <Section title="6. Conservazione dei Dati">
                        <p>
                            I dati personali vengono conservati per il tempo strettamente necessario al raggiungimento
                            delle finalità per cui sono stati raccolti, e comunque non oltre <strong>24 mesi</strong> dall'ultimo
                            contatto con l'utente, salvo obblighi di legge diversi.
                        </p>
                    </Section>

                    <Section title="7. Diritti dell'Interessato">
                        <p>
                            In conformità con gli articoli 15-22 del GDPR, l'utente ha il diritto di:
                        </p>
                        <ul>
                            <li><strong>Accesso</strong> — richiedere una copia dei propri dati personali</li>
                            <li><strong>Rettifica</strong> — correggere dati inesatti o incompleti</li>
                            <li><strong>Cancellazione</strong> — richiedere la cancellazione dei propri dati ("diritto all'oblio")</li>
                            <li><strong>Limitazione</strong> — limitare il trattamento dei propri dati</li>
                            <li><strong>Portabilità</strong> — ricevere i propri dati in un formato strutturato</li>
                            <li><strong>Opposizione</strong> — opporsi al trattamento dei propri dati</li>
                            <li><strong>Revoca del consenso</strong> — revocare il consenso in qualsiasi momento</li>
                        </ul>
                        <p>
                            Per esercitare questi diritti, contattaci all'indirizzo{' '}
                            <a href="mailto:info@agentondemand.it" className="text-shore-blue hover:underline">info@agentondemand.it</a>.
                        </p>
                        <p>
                            Hai inoltre il diritto di proporre reclamo al <strong>Garante per la Protezione dei Dati Personali</strong>
                            (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-shore-blue hover:underline">www.garanteprivacy.it</a>).
                        </p>
                    </Section>

                    <Section title="8. Cookie">
                        <p>
                            Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> strettamente necessari al funzionamento
                            del servizio (ad esempio, cookie di sessione per l'autenticazione). Non vengono utilizzati
                            cookie di profilazione, cookie analitici di terze parti, né strumenti di tracciamento.
                        </p>
                    </Section>

                    <Section title="9. Trasferimento dei Dati">
                        <p>
                            I dati possono essere trasferiti al di fuori dello Spazio Economico Europeo (SEE)
                            esclusivamente verso fornitori che garantiscono un livello adeguato di protezione,
                            in conformità con le decisioni di adeguatezza della Commissione Europea o le
                            clausole contrattuali standard.
                        </p>
                    </Section>

                    <Section title="10. Modifiche all'Informativa">
                        <p>
                            Ci riserviamo il diritto di aggiornare questa informativa. Eventuali modifiche saranno
                            pubblicate su questa pagina con la data di ultimo aggiornamento. Ti consigliamo di
                            consultare periodicamente questa pagina.
                        </p>
                    </Section>

                </div>
            </div>

            <Footer onNavigate={onNavigate} />

            <style>{`
        .prose-custom p {
          color: #6B7280;
          font-size: 0.9375rem;
          line-height: 1.75;
          font-weight: 300;
        }
        .prose-custom strong {
          color: #111827;
          font-weight: 600;
        }
        .prose-custom ul {
          list-style: none;
          padding-left: 0;
          margin-top: 0.75rem;
        }
        .prose-custom ul li {
          color: #6B7280;
          font-size: 0.9375rem;
          line-height: 1.75;
          font-weight: 300;
          padding-left: 1.5rem;
          position: relative;
        }
        .prose-custom ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.75rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0055FF;
        }
      `}</style>
        </>
    );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section>
        <h2 className="text-lg font-semibold text-gray-900 tracking-tight mb-4">{title}</h2>
        <div className="space-y-3">{children}</div>
    </section>
);

export default PrivacyPolicyPage;
