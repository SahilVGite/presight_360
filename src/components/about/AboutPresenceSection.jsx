import { aboutMapBg } from "../../assets/images";
import LocationSection from "../home/LocationSection";

export default function AboutPresenceSection() {
  return (
    <section
      className="sec-gap"
      style={{
        background: `url(${aboutMapBg}) top/100% 200% no-repeat`,
      }}
    >
      <div className="main-wrapper">
        <LocationSection />
      </div>
    </section>
  );
}
