import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '24px',
        background: 'var(--color-bg-primary)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '8rem',
          fontWeight: 900,
          color: 'rgba(26,107,219,0.15)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          marginTop: '-20px',
          marginBottom: '16px',
        }}
      >
        Page Not Found
      </h1>
      <p className="text-sm mb-8" style={{ color: 'rgba(168,192,214,0.6)', maxWidth: '320px', lineHeight: 1.7 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary px-6 py-3 text-sm">
        Back to Home →
      </Link>
    </div>
  );
}
