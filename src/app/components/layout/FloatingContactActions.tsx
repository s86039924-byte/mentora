'use client';

import Image from 'next/image';
import './floating-contact-actions.css';

const FloatingContactActions = () => (
  <div className="contact-floating-actions" aria-label="Quick contact shortcuts">
    <a
      className="floating-action floating-action--whatsapp"
      href="https://wa.me/917569235450"
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on WhatsApp"
    >
      <span className="floating-action__icon" aria-hidden="true">
        <Image src="/contact/wp.png" alt="" fill sizes="28px" priority />
      </span>
      <span className="floating-action__label">WhatsApp</span>
    </a>

    <a
      className="floating-action floating-action--call"
      href="tel:+917569235450"
      aria-label="Call us"
    >
      <span className="floating-action__icon" aria-hidden="true">
        <Image src="/contact/ph.png" alt="" fill sizes="28px" priority />
      </span>
      <span className="floating-action__label">Call Us</span>
    </a>
  </div>
);

export default FloatingContactActions;
