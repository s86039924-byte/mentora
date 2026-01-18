'use client';

import './contact.css';

const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSc99Uh20hAO9mb2kyoRZGNzfSBRJLp_K4LdK9Vi1lknVRX_FA/viewform?usp=sharing&ouid=109109604170305733892';

const contactChannels = [
  {
    title: 'Book a Counselling Call',
    description:
      'Share student details and our academic counsellors will call back with personalised guidance within one business day.',
    action: {
      label: 'Fill the form',
      href: formUrl,
      external: true,
    },
    meta: 'Preferred for parents exploring batches, scholarships or hostel support.',
  },
  {
    title: 'Talk on WhatsApp',
    description:
      'Chat instantly with the Vidya Bhumi team for quick clarifications about admission test, batches or results.',
    action: { label: 'Message on WhatsApp', href: 'https://wa.me/917569235450', external: true },
    meta: '7569235450 | 9328386289 · Available 10 AM – 8 PM',
  },
  {
    title: 'Email Us',
    description:
      'Send documents, counselling requests or collaboration ideas and we will respond within 24 hours.',
    action: { label: 'Email us (coming soon)', href: '#' },
    meta: 'Attach student details, class and preferred programme.',
  },
];

export default function ContactPage() {
  return (
    <main className="page contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="contact-eyebrow">Need help choosing the right path?</p>
          <h1>Speak with the Vidya Bhumi team</h1>
          <p className="contact-lede">
            Parents and students can book a counselling call, chat on WhatsApp or drop us an email.
            We respond quickly so you can make confident decisions about Boards, JEE and NEET prep.
          </p>
          <div className="contact-hero-actions">
            <a className="contact-btn contact-btn--primary" href={formUrl} target="_blank" rel="noreferrer">
              Book counselling
            </a>
            <a className="contact-btn contact-btn--ghost" href="https://wa.me/917569235450" target="_blank" rel="noreferrer">
              WhatsApp now
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {contactChannels.map(channel => (
              <article key={channel.title} className="contact-card">
                <div className="contact-card__header">
                  <h2>{channel.title}</h2>
                  {channel.meta && <span className="contact-card__meta">{channel.meta}</span>}
                </div>
                <p>{channel.description}</p>
                <a
                  className="contact-link"
                  href={channel.action.href}
                  target={channel.action.external ? '_blank' : undefined}
                  rel={channel.action.external ? 'noreferrer' : undefined}
                >
                  {channel.action.label}
                </a>
              </article>
            ))}
          </div>

          <div className="contact-help-box">
            <h3>Visit the campus</h3>
            <p>
              MENTORA<br />
              402, Sigma Esquire, Kankaria,<br />
              Maninagar, Ahmedabad.
            </p>
            <p className="contact-phones">7569235450 | 9328386289</p>
          </div>
        </div>
      </section>
    </main>
  );
}
