import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-primary">
      {/* Background image */}
      <div className="absolute inset-0 bg-hero-image" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      <div className="relative w-full px-[clamp(1rem,5vw,7.75rem)] py-[clamp(1rem,5vw,7.75rem)]">
        <div className="max-w-[1040px]">
          <h1 className="font-display font-bold uppercase leading-[1.46] tracking-[0.02em] mb-6 text-white text-[clamp(2rem,5vw,3.125rem)]">
            CONFIDENTIAL INSIGHT THAT EMPOWERS LEADERSHIP AND PROTECTS WHAT MATTERS MOST
          </h1>
          <div className="flex flex-wrap gap-3">
            <Link to="/solutions">
              <Button variant="primary" size="md" showArrow>
                Explore solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
