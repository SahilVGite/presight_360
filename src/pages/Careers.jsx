import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ChevronUp } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Card from '../components/common/Card';

export const JOBS_DATA = [
  {
    id: 1,
    title: 'Sr. Manager',
    openings: 1,
    experience: '7+ years',
    location: 'Area name, Location',
    skills: ['Curriculum Designing & Management', 'Good Communication Skills', 'University, School Co-ordination', 'Open for learning'],
    desc: 'Lead strategic initiatives and manage a high-performing team in a fast-paced, intelligence-driven environment.',
  },
  {
    id: 2,
    title: 'Intelligence Analyst',
    openings: 2,
    experience: '3+ years',
    location: 'Remote / On-site',
    skills: ['Research & Analysis', 'Geopolitical Knowledge', 'Report Writing', 'Data Interpretation'],
    desc: 'Analyze global threat environments and produce actionable intelligence reports for senior leadership.',
  },
  {
    id: 3,
    title: 'Security Operations Specialist',
    openings: 1,
    experience: '5+ years',
    location: 'Area name, Location',
    skills: ['Security Operations', 'Risk Assessment', 'Crisis Response', 'Team Leadership'],
    desc: 'Oversee day-to-day security operations and coordinate with field teams across multiple jurisdictions.',
  },
  {
    id: 4,
    title: 'Intern UI/Frontend Developer',
    openings: 2,
    experience: '0-1 years',
    location: 'Remote',
    skills: ['React', 'Tailwind CSS', 'Figma', 'HTML/CSS'],
    desc: 'Join our digital team and help build cutting-edge intelligence platforms and internal tools.',
  },
];

function JobCard({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(7,29,56,0.5)',
        marginBottom: '12px',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
      >
        <div>
          <h3
            className="font-bold mb-2"
            style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', textTransform: 'uppercase' }}
          >
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <span
              className="px-2 py-1 rounded"
              style={{ background: 'rgba(26,107,219,0.15)', color: 'rgba(168,192,214,0.8)' }}
            >
              Open positions: {job.openings}
            </span>
            <span
              className="px-2 py-1 rounded"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(168,192,214,0.7)' }}
            >
              {job.experience}
            </span>
            <span
              className="px-2 py-1 rounded flex items-center gap-1"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(168,192,214,0.7)' }}
            >
              <MapPin size={10} /> {job.location}
            </span>
          </div>
        </div>
        <ChevronUp
          size={18}
          style={{
            color: 'rgba(255,255,255,0.4)',
            transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
            transition: 'transform 0.2s',
            flexShrink: 0,
            marginTop: 4,
          }}
        />
      </button>

      {open && (
        <div className="px-6 pb-6">
          <p className="text-xs mb-2 font-semibold" style={{ color: 'rgba(168,192,214,0.6)' }}>
            Skills Required: {job.skills.join(', ')}
          </p>
          <ul className="space-y-1 mb-5">
            {[job.desc, 'This is dummy text will be replaced with original content.', 'This is dummy text will be replaced with original content.'].map((item, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ color: 'rgba(168,192,214,0.65)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--color-accent-red)', flexShrink: 0 }}>›</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <Link to={`/careers/${job.id}/apply`} className="btn-primary px-5 py-2 text-sm">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Careers() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const filtered = JOBS_DATA.filter(
    (j) =>
      j.title.toLowerCase().includes(search.toLowerCase()) &&
      j.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <>
      <PageHero
        label="Careers"
        title="BUILD MEANINGFUL CAREERS THAT SHAPE SMARTER DECISIONS AND STRONGER FUTURES."
      />

      {/* Intro */}
      <section style={{ padding: '60px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-3">Opportunity Awaits</p>
          <h2
            className="section-title mb-6"
            style={{ maxWidth: '780px', fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}
          >
            DO THE MOST IMPORTANT WORK OF YOUR CAREER, HELPING SAFEGUARD THE WORLD'S MOST IMPORTANT ORGANIZATIONS AND INDIVIDUALS AGAINST RISK.
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: 'rgba(168,192,214,0.7)' }}>
            PreSight 360 is a global provider of integrated risk intelligence and security solutions. We provide discreet, behind-the-scenes research and analysis that enables companies and VIPs to act with precision, clarity, and confidence. We apply our proprietary PASTIL framework - Politics, Alert-Levels, Security, Technology, Insights, and Logistics.
          </p>
        </div>
      </section>

      {/* Job Search */}
      <section style={{ padding: '60px 24px', background: 'var(--color-bg-primary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-2" style={{ color: 'var(--color-accent-red)' }}>
            Search Jobs
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: 'rgba(168,192,214,0.6)' }}>
            To begin the application process, search current openings and click "Apply".
          </p>

          {/* Search bar */}
          <div
            className="flex flex-col sm:flex-row gap-0 mb-10 rounded-full overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(7,29,56,0.6)', maxWidth: '700px', margin: '0 auto 40px' }}
          >
            <div className="flex items-center flex-1 px-5 gap-3">
              <Search size={15} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search by job title/ref. code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: '0.875rem', width: '100%', padding: '14px 0' }}
              />
            </div>
            <div
              style={{ width: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch', flexShrink: 0 }}
            />
            <div className="flex items-center flex-1 px-5 gap-3">
              <MapPin size={15} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Office, data center, or remote locations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: '0.875rem', width: '100%', padding: '14px 0' }}
              />
            </div>
            <button
              className="flex items-center justify-center m-1 px-5 rounded-full"
              style={{ background: 'var(--color-accent-red)', border: 'none', cursor: 'pointer', color: 'white', padding: '10px 20px' }}
            >
              <Search size={16} />
            </button>
          </div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-sm" style={{ color: 'rgba(168,192,214,0.5)' }}>
                No openings match your search.
              </p>
            ) : (
              filtered.map((job) => <JobCard key={job.id} job={job} />)
            )}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: '60px 24px', background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Success Stories',
              desc: 'Success Stories showcase real-world impact through client achievements, solved challenges, and measurable outcomes, highlighting how our intelligence-led insights and risk solutions drive confident decisions and lasting value.',
            },
            {
              title: 'Life At Presight360',
              desc: 'Life at Presight360 is about collaboration, curiosity, and purpose. We foster a culture where ideas are valued, growth is encouraged, and people work together to solve complex challenges with integrity, innovation, and impact.',
            },
          ].map((card, i) => (
            <Card key={i} className="p-8">
              <div
                className="rounded-lg mb-5"
                style={{ height: '160px', background: 'rgba(26,107,219,0.08)', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontSize: '0.75rem' }}
              >
                [ Image ]
              </div>
              <h3
                className="font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', textTransform: 'uppercase' }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(168,192,214,0.7)' }}>
                {card.desc}
              </p>
              <button
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--color-accent-red)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                → Read More
              </button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
