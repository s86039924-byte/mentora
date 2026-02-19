import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo/logo.png" alt="S-CUBUS logo" className="footer-logo-image footer-logo-image--bare" />
              <div>
              </div>
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
              <li><Link href="/courses/foundation-olympiad">Foundation</Link></li>
              <li><Link href="/courses/olympiad">Olympiad</Link></li>
              <li><Link href="/courses">NEET</Link></li>
              <li><Link href="/courses">IIT-JEE</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              {/* <li><Link href="/terms">Terms & Conditions</Link></li> */}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 team.mentoraedutech@gmail.com</p>
              <p>📞 +91 9879581555</p>
              <p>401, Sigma Esquire, Above Domino's,<br></br>
                Kankaria, Maninagar,<br></br>
                Ahmedabad 380028
              </p>
              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/share/1FP6LopZzT/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/mentoraedutech?igsh=MXh0NDB2ZTZreDEwbQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Mentora coaching Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
