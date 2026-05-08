import { Link } from 'react-router-dom';
import Button from './Button';

export default function CTASection({
  label = 'GET IN TOUCH',
  title = 'CONTACT US FOR INTELLIGENCE AND ADVISORY SERVICES',
  actions = [
    { label: 'Talk With Us', href: '/contact' },
    { label: 'Book An Appointment', href: '/contact' },
  ],
}) {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #05152a 0%, #020b18 100%)',
        padding: '80px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {label && <p className="section-label mb-4">{label}</p>}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            maxWidth: '600px',
            lineHeight: 1.15,
            marginBottom: '40px',
          }}
        >
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          {actions.map((action, i) => (
            <Link key={i} to={action.href}>
              <button
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  padding: '14px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  width: '260px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(26,107,219,0.5)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
              >
                {action.label}
                <span style={{ color: 'var(--color-accent-red)', fontSize: '1.2rem' }}>→</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
