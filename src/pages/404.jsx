import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center px-6 bg-primary">
      <p className="font-display font-[900] text-[calc(var(--fs-banner-title-xl)*2-2px)] text-[rgba(26,107,219,0.15)] leading-none tracking-[-0.05em]">
        404
      </p>
      <h1 className="font-display font-[800] [font-size:var(--fs-title-md)] uppercase -mt-5 mb-4">
        Page Not Found
      </h1>
      <p className="[font-size:var(--fs-body-sm)] mb-8 text-secondary\/60 max-w-[320px] leading-[1.7]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-primary px-6 py-3 [font-size:var(--fs-body-sm)] no-underline">
        Back to Home →
      </Link>
    </div>
  );
}
