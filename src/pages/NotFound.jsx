import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center px-6 bg-primary">
      <p className="font-display font-[900] text-[8rem] text-[rgba(26,107,219,0.15)] leading-none tracking-[-0.05em]">
        404
      </p>
      <h1 className="font-display font-[800] text-[2rem] uppercase -mt-5 mb-4">
        Page Not Found
      </h1>
      <p className="text-sm mb-8 text-secondary\/60 max-w-[320px] leading-[1.7]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary px-6 py-3 text-sm no-underline">
        Back to Home →
      </Link>
    </div>
  );
}
