import SectionHeader from "../common/SectionHeader";
import { ourClientsBg, Client1, Client2, Client3 } from "../../assets/images";

const CLIENTS = [
  Client1,
  Client2,
  Client3,
  Client1,
  Client2,
  Client3,
  Client1,
  Client2,
  Client3,
];

export default function AboutClientsSection() {
  return (
    <section className="sec-gap overflow-hidden" style={{
      background: `url(${ourClientsBg}) bottom/cover no-repeat`,
    }}>
      <div className="main-wrapper">
        <p className="section-label [font-size:var(--fs-body-md)]! mb-2">Associated Partners</p>
        <SectionHeader title="OUR CLIENTS" className=" mb-25" />
        <div className="overflow-hidden w-full">
          <div
            className="flex items-center"
            style={{ width: 'max-content', animation: 'marquee 18s linear infinite' }}
          >
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8 sm:px-12 lg:px-16 py-6 shrink-0"
              >
                <img
                  src={client}
                  alt={`Client ${i + 1}`}
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
