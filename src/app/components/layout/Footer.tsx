'use client'

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@mentoraedutech',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={2} y={5} width={20} height={14} rx={6} />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mentoraedutech?igsh=MXh0NDB2ZTZreDEwbQ==',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={3} y={3} width={18} height={18} rx={5} />
        <circle cx={12} cy={12} r={4.2} />
        <circle cx={17.5} cy={6.5} r={1.5} fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: '#',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
        strokeLinejoin="round"
      >
        <path d="M3 10.5L21 4l-5 13-4.5-3-2.5 2.5-2-7.5z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1FP6LopZzT/?mibextid=wwXIfr',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.4}
        strokeLinejoin="round"
      >
        <path d="M14 4h3V1h-3c-3.3 0-6 2.5-6 6v3H6v4h3v9h4v-9h3l1-4h-4V10c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer" id="cta">
      <div className="container footer-content">
        <div className="footer-logo">Mentora</div>
        <p className="footer-tagline">Transforming Education Through Passion & Innovation</p>

        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="social-link"
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MENTORA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
