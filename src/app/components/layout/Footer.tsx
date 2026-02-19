'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Footer.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      type="button"
    >
      ↑
    </button>
  );
};

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/logo/logo.png" alt="Mentora logo" className="footer-logo-image footer-logo-image--bare" />
              </div>
              <p className="footer-description">
                Premier coaching institute for Foundation, Olympiad, NEET, and JEE preparation.
              </p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/courses">Scholarship</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Courses</h4>
              <ul className="footer-links">
                <li><Link href="/courses">Foundation</Link></li>
                <li><Link href="/courses">Olympiad</Link></li>
                <li><Link href="/courses">NEET</Link></li>
                <li><Link href="/courses">IIT-JEE</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p>
                  <a href="mailto:team.mentoraedutech@gmail.com">
                    📧 team.mentoraedutech@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+919879581555">
                    📞 +91 9879581555
                  </a>
                </p>
                <p>
                  401, Sigma Esquire, Above Domino&apos;s,<br />
                  Kankaria, Maninagar,<br />
                  Ahmedabad 380028
                </p>
                <div className="footer-socials">
                  <a
                    href="https://www.facebook.com/share/1FP6LopZzT/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/mentoraedutech?igsh=MXh0NDB2ZTZreDEwbQ=="
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Mentora Coaching Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
};

export default Footer;
