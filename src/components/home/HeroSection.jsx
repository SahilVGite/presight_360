import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-primary">
      {/* Background image */}
      <div className="absolute inset-0 bg-hero-image" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative w-full px-[clamp(1rem,5vw,7.75rem)] py-[clamp(1rem,5vw,7.75rem)] pt-[clamp(20rem,5vw,7.75rem)]">
        <div className="max-w-[1040px]">
          <h1 className="font-display font-bold uppercase leading-[1.46] tracking-[0.02em] mb-6 text-white [font-size:var(--fs-section-title-sm)]">
            Integrated Operational Intelligence for Complex Risk Environments
          </h1>
          <p className="[font-size:var(--fs-body-md)] leading-[1.85] mb-6 text-white">
            Transforming data into actionable intelligence
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/solutions">
              <Button variant="primary" size="md" showArrow>
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="md" showArrow>
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
