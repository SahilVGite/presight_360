import {
  certification1,
  certification2,
  certification3,
  certification4,
  certification5,
  certification6,
} from "../../assets/images";

const CERTIFICATIONS = [
  { img: certification1 },
  { img: certification2 },
  { img: certification3 },
  { img: certification4 },
  { img: certification5 },
  { img: certification6 },
];

export default function CertificationsSection() {
  return (
    <section className="py-[clamp(4rem,8vw,8rem)] overflow-hidden relative">
      <div className="main-wrapper">
        {/* Heading */}
        <div className="mb-10 pl-0 md:pl-6 lg:pl-12.5">
          <p className="uppercase text-lg tracking-[0.18em] text-[#DB3B3B] font-semibold mb-3">
            Dummy text
          </p>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className=" flex items-center justify-center rounded-[17px] bg-white/5 backdrop-blur-md p-[.5625rem] transition-all duration-300 hover:bg-white/10 "
              >
                <div className="flex items-center justify-center overflow-hidden w-full">
                  <img
                    src={cert.img}
                    alt="Certification"
                    className="object-contain w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Top Border */}
      <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[1465px] h-px bg-[#4E5E70]"></span>
    </section>
  );
}
