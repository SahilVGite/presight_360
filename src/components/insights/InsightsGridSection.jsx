'use client'
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { INSIGHTS_DATA } from '../../constants/insightsData';
import InsightCard from './InsightCard';

export default function InsightsGridSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth >= 1024) setCols(3);
      else if (window.innerWidth >= 768) setCols(2);
      else setCols(1);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  useEffect(() => { setCurrentPage(1); }, [cols]);

  const itemsPerPage = cols * 3;
  const totalPages = Math.ceil(INSIGHTS_DATA.length / itemsPerPage);
  const currentItems = INSIGHTS_DATA.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPageNumbers = () => {
    if (totalPages <= 3) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const start = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
    const pages = [start, start + 1, start + 2];
    if (start + 2 < totalPages) pages.push('...', totalPages);
    return pages;
  };

  return (
    <section className="sec-gap">
      <div className="main-wrapper">
        <div className="flex items-center justify-between mb-16">
          <div className=''>
            <h2 className="font-display [font-size:var(--fs-title-lg)] font-bold text-accent-red leading-loose">
              News &amp; Insight
            </h2>
            <p className='[font-size:var(--fs-body-md)]'>To begin the application process, search current openings and click "Apply".</p>
          </div>
          <div className='relative'>
            <select defaultValue="" name="" id="" className='appearance-none rounded-[150px] focus:border-none shadow-[0px_10px_20px_rgba(0,0,0,0.08)] bg-[rgba(255,255,255,0.1)] border-none text-white [font-size:var(--fs-body)] px-6 py-4 pr-10 cursor-pointer'>
              <option value="" disabled>Latest Topic</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
            <span className='absolute pointer-events-none top-1/2 right-3.5 transform -translate-1/2'>▾</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8.5">
          {currentItems.map((insight, i) => (
            <InsightCard key={`${insight.slug}-${i}`} insight={insight} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 md:gap-12.5 mt-12">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center gap-1 rounded text-white [font-size:var(--fs-body-sm)] font-medium bg-transparent cursor-pointer hover:border-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={18} /> Previous
          </button>
          <div className="flex items-center justify-center gap-2 px-4 md:px-12.5 border-x">
            {getPageNumbers().map((p, i) => (
              <button
                key={i}
                onClick={() => typeof p === 'number' && setCurrentPage(p)}
                disabled={p === '...'}
                className={`w-5 md:w-8 h-5 md:h-8 flex items-center justify-center rounded-full [font-size:var(--fs-body-sm)] transition-colors
                  ${p === currentPage ? 'bg-accent-red text-white cursor-pointer' : p === '...' ? 'text-white cursor-default' : 'bg-white/10 text-white hover:bg-white/20 cursor-pointer'}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center gap-1 rounded text-white [font-size:var(--fs-body-sm)] font-medium bg-transparent cursor-pointer hover:border-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
