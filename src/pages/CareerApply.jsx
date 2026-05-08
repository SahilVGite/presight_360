import { useParams, Link } from 'react-router-dom';
import { Upload, ArrowLeft } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import { JOBS_DATA } from './Careers';

function FormField({ label, placeholder, type = 'text', half = false }) {
  return (
    <div style={{ gridColumn: half ? 'span 1' : 'span 2' }}>
      <input
        type={type}
        placeholder={placeholder || label}
        className="input-dark text-sm"
        style={{ borderRadius: '6px' }}
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

      <section style={{ padding: '80px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <Link
            to="/careers"
            className="flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: 'rgba(168,192,214,0.6)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,192,214,0.6)')}
          >
            <ArrowLeft size={14} /> Back to Careers
          </Link>

          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: 'rgba(7,29,56,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h2
              style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '32px' }}
            >
              EASY APPLY
            </h2>

            {/* Personal Details */}
            <div className="mb-8">
              <p
                className="font-semibold mb-5 text-sm uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
              >
                Personal Details
              </p>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Last Name" half />
                <FormField label="First Name" half />
                <div style={{ gridColumn: 'span 2' }}>
                  <input type="email" placeholder="Email" className="input-dark text-sm" />
                </div>
                <FormField label="Phone Number" half />
                <FormField label="City" half />
                <div style={{ gridColumn: 'span 2' }}>
                  <textarea
                    placeholder="Address"
                    rows={3}
                    className="input-dark text-sm"
                    style={{ resize: 'vertical' }}
                  />
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="mb-8">
              <p
                className="font-semibold mb-5 text-sm uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
              >
                Professional Details
              </p>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Degree Level" half />
                <FormField label="Degree Title" half />
                <FormField label="Total Experience" half />
                <FormField label="Expected Salary" half />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="mb-8">
              <p
                className="font-semibold mb-4 text-sm uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}
              >
                Recent Resume
              </p>
              <div
                className="flex flex-col items-center justify-center gap-2 p-8 rounded-lg cursor-pointer transition-all"
                style={{
                  border: '1px dashed rgba(255,255,255,0.15)',
                  background: 'rgba(26,107,219,0.04)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(26,107,219,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
              >
                <Upload size={20} style={{ color: 'rgba(255,255,255,0.4)' }} />
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <span style={{ color: 'var(--color-accent-blue-light)', fontWeight: 600 }}>Upload</span> or Drag and Drop here
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>PDF, JPG or PNG (MAX Limit 100MB)</p>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <button className="btn-primary px-6 py-3 text-sm">
                Submit →
              </button>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                We respect your privacy. Your data will never be shared
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
