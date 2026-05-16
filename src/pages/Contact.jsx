import "../assets/css/contact.css";
import { ContactMain } from "../assets/images";
import Button from "../components/common/Button";

export default function Contact() {
  return (
    <>
      <section className="contactPage min-h-screen pt-25 flex items-center">
        <div className="max-w-387.75 mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl p-5 overflow-hidden backdrop-blur-[15px] bg-[#FFFFFF0A] border border-[#FDFDFD0A]">
            {/* Form */}
            <div className="p-0 md:p-6 lg:p-10 pb-5">
              <h1 className="font-display uppercase font-bold mb-4 [font-size:var(--fs-section-title)] text-white">
                LET'S CONNECT
              </h1>
              <p className="[font-size:var(--fs-body-md)] mb-8 text-white leading-[1.7]">
                Our global team is ready to help you determine the security and
                risk management path that's right for you.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-dark [font-size:var(--fs-body-sm)]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-dark [font-size:var(--fs-body-sm)]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="input-dark [font-size:var(--fs-body-sm)] resize-none"
                  />
                </div>
                <div className="pt-2">
                  <Button variant="primary" size="md" showArrow>
                    Request Consultation
                  </Button>
                </div>
                <p className="[font-size:var(--fs-body)] text-white">
                  We respect your privacy. Your data will never be shared
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="max-w-182 flex items-center justify-center text-white/10 [font-size:var(--fs-body-xs)] overflow-hidden">
              <img
                src={ContactMain}
                alt="Contact Us"
                className="rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
