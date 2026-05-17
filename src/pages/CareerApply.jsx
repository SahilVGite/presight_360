import { useRouter } from "next/router";
import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";
import { CareerFormMain, careerFormBannerBg } from "../assets/images";
import { JOBS_DATA } from "./Careers";
import Upload from "../assets/icons/Upload.jsx";

export default function CareerApply() {
  const { id } = useRouter().query;
  const job = JOBS_DATA.find((j) => j.id === parseInt(id));

  return (
    <>
      <PageHero
        bgImage={careerFormBannerBg}
        title={job ? job.title.toUpperCase() : "APPLY NOW"}
        subtitle="Fill the form below. Our team will get in touch with you shortly. Contact our support team in case of any difficulty."
      />

      <section className="careerFormPage min-h-screen flex items-center">
        <div className="max-w-387.75 mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl p-5 overflow-hidden backdrop-blur-[15px] bg-[#FFFFFF0A] border border-[#FDFDFD0A]">
            {/* Form */}
            <div className="p-0 md:p-6 lg:p-10 pb-5">
              <h2 className="font-display uppercase font-bold mb-8 text-[calc(var(--fs-title-xl)+4px)] text-white">
                EASY APPLY
              </h2>

              {/* Personal Details */}
              <div className="mb-6">
                <p className=" [font-size:var(--fs-body-2xl)] mb-4 text-white">
                  Personal Details
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-dark [font-size:var(--fs-body-sm)]"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                  </div>
                  <textarea
                    placeholder="Address"
                    rows={3}
                    className="input-dark [font-size:var(--fs-body-sm)] resize-none"
                  />
                </div>
              </div>

              {/* Professional Details */}
              <div className="mb-6">
                <p className=" [font-size:var(--fs-body-2xl)] mb-4 text-white">
                  Professional Details
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Degree Level"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                    <input
                      type="text"
                      placeholder="Degree Title"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Total Experience"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                    <input
                      type="text"
                      placeholder="Expected Salary"
                      className="input-dark [font-size:var(--fs-body-sm)]"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="mb-6">
                <p className="[font-size:var(--fs-body-md)] mb-4 text-white">
                  Recent Resume
                </p>
                <div className="flex flex-col items-center justify-center gap-2 p-6 rounded-lg cursor-pointer transition-all border border-dashed border-[#C6C6C6] bg-[rgba(26,107,219,0.04)]">
                  <p className="[font-size:var(--fs-body-sm)] text-white/50">
                    <span>
                      <Upload size={20} className="inline text-white mr-1" />
                    </span>
                    <span className="font-semibold text-white">Upload</span> or <span className="text-white">Drag and
                    Drop here</span>
                  </p>
                  <p className="[font-size:var(--fs-body-xs)] text-white/30">
                    PDF, JPG or PNG (MAX Limit 100MB)
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="primary" size="md" showArrow>
                  Submit
                </Button>
              </div>
              <p className="mt-4 [font-size:var(--fs-body)] text-white">
                We respect your privacy. Your data will never be shared
              </p>
            </div>

            {/* Image */}
            <div className="max-w-182 flex items-center justify-center overflow-hidden">
              <img
                src={CareerFormMain}
                alt="Career Apply"
                className="rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
