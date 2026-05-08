import { useParams, Link } from 'react-router-dom';
import { Upload, ArrowLeft } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import { JOBS_DATA } from './Careers';

function FormField({ label, placeholder, type = 'text', fullWidth = false }) {
  return (
    <div className={fullWidth ? 'col-span-2' : 'col-span-1'}>
      <input
        type={type}
        placeholder={placeholder || label}
        className="input-dark text-sm rounded-md"
      />
    </div>
  );
}

export default function CareerApply() {
  const { id } = useParams();
  const job = JOBS_DATA.find((j) => j.id === parseInt(id));

  return (
    <>
      <PageHero
        label="Careers"
        title={job ? job.title.toUpperCase() : 'APPLY NOW'}
        subtitle="Fill the form below. Our team will get in touch with you shortly. Contact our support team in case of any difficulty."
      />

      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/careers"
            className="flex items-center gap-2 text-sm mb-10 text-secondary\/60 hover:text-white transition-colors no-underline"
          >
            <ArrowLeft size={14} /> Back to Careers
          </Link>

          <div className="rounded-2xl p-8 md:p-12 bg-card-60 border border-white\/07">
            <h2 className="font-display font-[800] text-[2rem] uppercase mb-8">EASY APPLY</h2>

            {/* Personal Details */}
            <div className="mb-8">
              <p className="font-semibold mb-5 text-sm uppercase tracking-[0.1em] text-white/60">
                Personal Details
              </p>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Last Name" />
                <FormField label="First Name" />
                <FormField label="Email" type="email" fullWidth />
                <FormField label="Phone Number" />
                <FormField label="City" />
                <div className="col-span-2">
                  <textarea
                    placeholder="Address"
                    rows={3}
                    className="input-dark text-sm resize-y"
                  />
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="mb-8">
              <p className="font-semibold mb-5 text-sm uppercase tracking-[0.1em] text-white/60">
                Professional Details
              </p>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Degree Level" />
                <FormField label="Degree Title" />
                <FormField label="Total Experience" />
                <FormField label="Expected Salary" />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="mb-8">
              <p className="font-semibold mb-4 text-sm uppercase tracking-[0.1em] text-white/60">
                Recent Resume
              </p>
              <div className="flex flex-col items-center justify-center gap-2 p-8 rounded-lg cursor-pointer transition-all border border-dashed border-white\/15 bg-[rgba(26,107,219,0.04)] hover:border-blue\/35">
                <Upload size={20} className="text-white/40" />
                <p className="text-sm text-white/50">
                  <span className="text-accent-blue-light font-semibold">Upload</span> or Drag and Drop here
                </p>
                <p className="text-xs text-white/30">PDF, JPG or PNG (MAX Limit 100MB)</p>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <button className="btn-primary px-6 py-3 text-sm">Submit →</button>
              <p className="text-xs text-white/35">We respect your privacy. Your data will never be shared</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
