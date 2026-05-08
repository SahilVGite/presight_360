const CERTIFICATIONS = [
  { name: 'ISO 27001', sub: 'Certified' },
  { name: 'G4S',       sub: 'Partner' },
  { name: 'ASIS',      sub: 'Member' },
  { name: 'OSAC',      sub: 'Affiliate' },
  { name: 'INSA',      sub: 'Member' },
  { name: 'Control Risks', sub: 'Alliance' },
  { name: 'Kroll',     sub: 'Partner' },
];

export default function CertificationsSection() {
  return (
    <section className="bg-primary py-[60px] px-6 border-t border-white\/05">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-8 text-center">Presight 360</p>
        <h2 className="section-title text-center mb-10 text-[clamp(1.3rem,2.5vw,1.8rem)]">
          CERTIFICATIONS
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-lg px-5 py-3 text-center border border-white\/10 bg-card-50 min-w-[90px]"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1.5 bg-blue-badge">
                <span className="text-[0.65rem] font-[900] text-accent-blue-light">
                  {cert.name.charAt(0)}
                </span>
              </div>
              <p className="font-bold uppercase text-white/80 text-[0.65rem]">
                {cert.name}
              </p>
              <p className="text-secondary\/45 text-[0.6rem]">
                {cert.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
