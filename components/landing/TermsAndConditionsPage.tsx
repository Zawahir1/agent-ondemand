import React from 'react';
import Footer from './Footer';

interface TermsAndConditionsPageProps {
    onNavigate?: (page: string, anchor?: string) => void;
}

const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({ onNavigate }) => {
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
                    Termini e <br /><span className="text-gray-400">Condizioni</span>
                </h1>
                <p className="text-gray-500 text-sm font-light mb-16">Ultimo aggiornamento: 12 Febbraio 2026</p>

                <div className="prose-custom space-y-12">

                    <Section title="1. Accettazione dei Termini">
                        <p>
                            Accedendo e utilizzando i servizi offerti da <strong>Sales on Demand S.r.l.</strong> ("Agent on Demand"),
                            accetti di essere vincolato dai presenti Termini e Condizioni di utilizzo ("Termini"). Se non accetti
                            questi Termini, ti preghiamo di non utilizzare i nostri servizi.
                        </p>
                    </Section>

                    <Section title="2. Descrizione del Servizio">
                        <p>
                            Agent on Demand fornisce agenti vocali basati su intelligenza artificiale per l'automazione delle chiamate in
                            entrata e in uscita ("Servizio"). Il Servizio include, ma non è limitato a, prenotazione appuntamenti,
                            qualificazione lead e supporto clienti automatizzato.
                        </p>
                    </Section>

                    <Section title="3. Registrazione e Account">
                        <p>
                            Per utilizzare il nostro Servizio, potrebbe essere necessario creare un account. Sei responsabile della riservatezza
                            delle credenziali di accesso e di tutte le attività che avvengono sotto il tuo account.
                        </p>
                        <ul>
                            <li>Devi fornire informazioni accurate e complete.</li>
                            <li>Devi comunicarci immediatamente qualsiasi uso non autorizzato del tuo account.</li>
                        </ul>
                    </Section>

                    <Section title="4. Tariffe e Pagamenti">
                        <p>
                            L'uso dei servizi premium è soggetto al pagamento delle tariffe indicate nella sezione Prezzi del nostro sito.
                        </p>
                        <ul>
                            <li>I piani di abbonamento vengono fatturati su base mensile o annuale.</li>
                            <li>Tutte le tariffe sono al netto dell'IVA e di altre imposte applicabili, salvo diversa indicazione.</li>
                            <li>Ci riserviamo il diritto di modificare i prezzi dei nostri servizi in qualsiasi momento.</li>
                        </ul>
                    </Section>

                    <Section title="5. Obblighi dell'Utente">
                        <p>
                            L'utente accetta di utilizzare il Servizio esclusivamente per scopi legali e conformi a tutte le
                            normative applicabili. È severamente vietato:
                        </p>
                        <ul>
                            <li>Utilizzare il Servizio per inviare spam, chiamate indesiderate o molestie.</li>
                            <li>Aggirare o tentare di eludere le misure di sicurezza del sistema.</li>
                            <li>Rivendere o ridistribuire il Servizio senza autorizzazione esplicita.</li>
                        </ul>
                    </Section>

                    <Section title="6. Proprietà Intellettuale">
                        <p>
                            Tutti i diritti di proprietà intellettuale relativi al Servizio, inclusi software, design, testo e
                            grafica, sono un'esclusiva di Sales on Demand S.r.l. e dei suoi licenziatari.
                        </p>
                    </Section>

                    <Section title="7. Limitazione di Responsabilità">
                        <p>
                            Nei limiti massimi consentiti dalla legge, Agent on Demand non sarà responsabile per danni indiretti,
                            incidentali, speciali, consequenziali o punitivi, derivanti dall'uso o dall'impossibilità di utilizzare
                            il Servizio. Il Servizio è fornito "così com'è" e "come disponibile".
                        </p>
                    </Section>

                    <Section title="8. Livelli di Servizio (SLA)">
                        <p>
                            Ci impegniamo a mantenere la massima operatività dei nostri agenti vocali, ma non garantiamo un'operatività
                            ininterrotta o priva di errori a causa di fattori esterni o necessità di manutenzione dei sistemi.
                        </p>
                    </Section>

                    <Section title="9. Risoluzione e Sospensione">
                        <p>
                            Ci riserviamo il diritto di sospendere o chiudere l'account e l'accesso al Servizio in qualsiasi momento,
                            con o senza preavviso, in caso di violazione dei presenti Termini.
                        </p>
                    </Section>

                    <Section title="10. Legge Applicabile e Foro Competente">
                        <p>
                            I presenti Termini sono regolati e interpretati in conformità con le leggi italiane. Per qualsiasi
                            controversia derivante o relativa a questi Termini sarà competente in via esclusiva il Foro di Milano.
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

export default TermsAndConditionsPage;
