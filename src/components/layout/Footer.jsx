import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants/navigation';
import siteLogo from '../../assets/images/siteLogo.png';
import siteShortLogo from '../../assets/images/siteShortLogo.png';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="gradient-footer ">
      <div className="max-w-[104.375rem] mx-auto py-14">
        <div className="flex flex-row md:flex-row justify-between gap-40">

          {/* Left — brand + newsletter */}
          <div className='max-w-[23.125rem] w-full flex flex-col justify-between gap-12'>
            <div className="flex flex-col gap-3 mb-6 ">
              <img src={siteLogo} alt="Presight 360" className="w-[15.625rem]" />
              <div className="flex items-center gap-2 mt-[1.875rem]">
                  <img src={siteShortLogo} alt="Alliance" />
              </div>
            </div>

            <div>
              <p className="text-3xl font-normal mb-14 tracking-wider text-white">
                Subscribe to our newsletter
              </p>
              <div className="flex items-center w-full relative">
                <input
                  type="email"
                  placeholder="Mindora@email.ru"
                  className="text-sm flex-1 border-b-1 border-b-white focus:outline-none pb-2 bg-transparent pr-6"
                />
                <button className="flex items-center justify-center px-4 py-2 pr-0 shrink-0 bg-transparent text-white  cursor-pointer absolute right-0 bottom-0" >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right — tagline + links */}
          <div className='w-full'>
            <p className="text-[1.25rem] font-light mb-16 max-w-[33.75rem] text-white leading-[1.7] pl-2">
              Providing stability and foresight for leaders navigating uncertainty in high-stakes environments worldwide
            </p>
            <div>
              <p className="text-[.625rem] font-medium uppercase tracking-widest pb-3 mb-9 font-semibold text-white border-b border-[#C6C6C6] pl-2">
                Info
              </p>
              <ul className="space-y-7 pl-12">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-lg text-white font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-between mt-20'>
                <ul className='flex gap-12'>
                    <li>
                        <p className='mb-2 text-[.625rem] text-white font-medium uppercase'>Corporate Office</p>
                        <Link to="tel:+62899077632" className='text-sm text-white font-medium'>+62 899 077 632</Link>
                    </li>
                    <li>
                        <p className='mb-2 text-[.625rem] text-white font-medium uppercase'>PHONE</p>
                        <Link to="tel:+62899077632" className='text-sm text-white font-medium'>+62 556 783 472</Link>
                    </li>
                    <li>
                        <p className='mb-2 text-[.625rem] text-white font-medium uppercase'>Email</p>
                        <Link to="mailto:Mindora@gmail.com" className='text-sm text-white font-medium'>Mindora@gmail.com</Link>
                    </li>
                </ul>
                <div>
                    <button onClick={scrollToTop} className='flex items-center gap-2 text-sm text-white font-medium uppercase tracking-widest rounded-full border-1 border-white px-4 py-2'>
                        <ArrowUp size={24} />
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
