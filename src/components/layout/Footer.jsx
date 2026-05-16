import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants/navigation';
import siteLogo from '../../assets/images/siteLogo.png';
import siteShortLogo from '../../assets/images/siteShortLogo.png';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="gradient-footer">
      <div className="main-wrapper px-4 sm:px-6 lg:px-10 py-10 md:py-14">
        <div className="flex [@media(min-width:769px)]:flex-row [@media(max-width:768px)]:flex-col justify-between gap-12 md:gap-16 lg:gap-40">

          {/* Left — brand + newsletter */}
          <div className="w-full md:w-92.5 md:shrink-0 flex flex-col justify-between gap-10 md:gap-12">
            <div className="flex flex-col gap-3">
              <img src={siteLogo} alt="Presight 360" className="w-45 sm:w-50 md:w-62.5" />
              <div className="flex items-center gap-2 mt-4 md:mt-7.5">
                <img src={siteShortLogo} alt="Alliance" />
              </div>
            </div>

            <div>
              <p className="[font-size:var(--fs-body-lg)] md:[font-size:var(--fs-body-2xl)] lg:[font-size:var(--fs-title-base)] font-normal mb-8 md:mb-14 tracking-wider text-white">
                Subscribe to our newsletter
              </p>
              <div className="flex items-center w-full relative">
                <input
                  type="email"
                  placeholder="Mindora@email.ru"
                  className="[font-size:var(--fs-body-sm)] flex-1 border-b border-b-white focus:outline-none pb-2 bg-transparent pr-6 text-white placeholder:text-white/50"
                />
                <button className="flex items-center justify-center px-4 py-2 pr-0 shrink-0 bg-transparent text-white cursor-pointer absolute right-0 bottom-0">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right — tagline + links */}
          <div className="w-full">
            <p className="[font-size:var(--fs-body)] md:[font-size:var(--fs-body-md)] lg:[font-size:var(--fs-body-lg)] font-light mb-8 md:mb-16 text-white leading-[1.7]">
              Providing stability and foresight for leaders navigating uncertainty in high-stakes environments worldwide
            </p>

            <div>
              <p className="text-[calc(var(--fs-body-xs)-2px)] font-semibold uppercase tracking-widest pb-3 mb-6 md:mb-9 text-white border-b border-[#C6C6C6] pl-2">
                Info
              </p>
              <ul className="flex-wrap gap-x-8 gap-y-4 block space-y-7 pl-4 md:pl-12">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="[font-size:var(--fs-body)] md:[font-size:var(--fs-body-md)] text-white font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom row */}
            <div className="flex flex-row sm:flex-col justify-between items-end sm:items-end gap-8 mt-12 md:mt-20">
              <ul className="flex flex-wrap gap-x-8 gap-y-5 sm:gap-12">
                <li>
                  <p className="mb-2 text-[calc(var(--fs-body-xs)-2px)] text-white font-medium uppercase">Corporate Office</p>
                  <Link to="tel:+62899077632" className="[font-size:var(--fs-body-xs)] md:[font-size:var(--fs-body-sm)] text-white font-medium">+62 899 077 632</Link>
                </li>
                <li>
                  <p className="mb-2 text-[calc(var(--fs-body-xs)-2px)] text-white font-medium uppercase">Phone</p>
                  <Link to="tel:+62899077632" className="[font-size:var(--fs-body-xs)] md:[font-size:var(--fs-body-sm)] text-white font-medium">+62 556 783 472</Link>
                </li>
                <li>
                  <p className="mb-2 text-[calc(var(--fs-body-xs)-2px)] text-white font-medium uppercase">Email</p>
                  <Link to="mailto:Mindora@gmail.com" className="[font-size:var(--fs-body-xs)] md:[font-size:var(--fs-body-sm)] text-white font-medium">Mindora@gmail.com</Link>
                </li>
              </ul>

              <div className="flex items-center gap-4 md:gap-5 shrink-0">
                <button onClick={scrollToTop} className="flex items-center gap-2 [font-size:var(--fs-body-sm)] text-white font-medium uppercase tracking-widest rounded-full border border-white p-5 md:p-8 cursor-pointer">
                  <ArrowUp size={20} />
                </button>
                <ul className="grid grid-cols-2 gap-2 items-center">
                  <li>
                    <Link to="/" className="rounded-full border border-white p-[11px] md:p-[13px] flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.25 0H1.75C0.784875 0 0 0.784875 0 1.75V12.25C0 13.2151 0.784875 14 1.75 14H7V9.1875H5.25V7H7V5.25C7 4.55381 7.27656 3.88613 7.76884 3.39384C8.26113 2.90156 8.92881 2.625 9.625 2.625H11.375V4.8125H10.5C10.017 4.8125 9.625 4.767 9.625 5.25V7H11.8125L10.9375 9.1875H9.625V14H12.25C13.2151 14 14 13.2151 14 12.25V1.75C14 0.784875 13.2151 0 12.25 0Z" fill="white"/></svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="rounded-full border border-white p-[11px] md:p-[13px] flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.13929 6.39975L14.0571 0H11.8621L8.10857 4.88775L4.77857 0H0L5.57571 8.1825L0.335714 15H2.53143L6.60643 9.6975L10.2214 15H15L9.13929 6.39975ZM7.43929 8.61225L6.40714 7.098L2.4 1.22025H4.05L7.28429 5.958L8.315 7.473L12.6136 13.7797H10.9636L7.43929 8.61225Z" fill="#FFF9F8"/></svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="rounded-full border border-white p-[11px] md:p-[13px] flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.83333 0H11.8333C14.5 0 16.6667 2.16667 16.6667 4.83333V11.8333C16.6667 13.1152 16.1574 14.3446 15.251 15.251C14.3446 16.1574 13.1152 16.6667 11.8333 16.6667H4.83333C2.16667 16.6667 0 14.5 0 11.8333V4.83333C0 3.55145 0.509225 2.32208 1.41565 1.41565C2.32208 0.509225 3.55145 0 4.83333 0ZM4.66667 1.66667C3.87102 1.66667 3.10796 1.98274 2.54535 2.54535C1.98274 3.10796 1.66667 3.87102 1.66667 4.66667V12C1.66667 13.6583 3.00833 15 4.66667 15H12C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4.66667C15 3.00833 13.6583 1.66667 12 1.66667H4.66667ZM12.7083 2.91667C12.9846 2.91667 13.2496 3.02641 13.4449 3.22176C13.6403 3.41711 13.75 3.68207 13.75 3.95833C13.75 4.2346 13.6403 4.49955 13.4449 4.6949C13.2496 4.89025 12.9846 5 12.7083 5C12.4321 5 12.1671 4.89025 11.9718 4.6949C11.7764 4.49955 11.6667 4.2346 11.6667 3.95833C11.6667 3.68207 11.7764 3.41711 11.9718 3.22176C12.1671 3.02641 12.4321 2.91667 12.7083 2.91667ZM8.33333 4.16667C9.4384 4.16667 10.4982 4.60565 11.2796 5.38705C12.061 6.16846 12.5 7.22826 12.5 8.33333C12.5 9.4384 12.061 10.4982 11.2796 11.2796C10.4982 12.061 9.4384 12.5 8.33333 12.5C7.22826 12.5 6.16846 12.061 5.38705 11.2796C4.60565 10.4982 4.16667 9.4384 4.16667 8.33333C4.16667 7.22826 4.60565 6.16846 5.38705 5.38705C6.16846 4.60565 7.22826 4.16667 8.33333 4.16667ZM8.33333 5.83333C7.67029 5.83333 7.03441 6.09672 6.56557 6.56557C6.09672 7.03441 5.83333 7.67029 5.83333 8.33333C5.83333 8.99637 6.09672 9.63226 6.56557 10.1011C7.03441 10.5699 7.67029 10.8333 8.33333 10.8333C8.99637 10.8333 9.63226 10.5699 10.1011 10.1011C10.5699 9.63226 10.8333 8.99637 10.8333 8.33333C10.8333 7.67029 10.5699 7.03441 10.1011 6.56557C9.63226 6.09672 8.99637 5.83333 8.33333 5.83333Z" fill="#FFF9F8"/></svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="rounded-full border border-white p-[11px] md:p-[13px] flex items-center justify-center w-9 h-9 md:w-10 md:h-10">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2312 2.76455C15.3558 1.88478 14.3132 1.18724 13.1641 0.712603C12.015 0.237969 10.7824 -0.0042561 9.53819 5.6591e-05C4.32513 5.6591e-05 0.0763821 4.22754 0.0763821 9.41453C0.0763821 11.077 0.515578 12.692 1.33668 14.117L0 19L5.01256 17.689C6.39698 18.4395 7.95327 18.8385 9.53819 18.8385C14.7513 18.8385 19 14.611 19 9.42403C19 6.90654 18.0166 4.54104 16.2312 2.76455ZM9.53819 17.2425C8.12512 17.2425 6.7407 16.8625 5.52814 16.15L5.24171 15.979L2.26281 16.758L3.05528 13.87L2.86432 13.5755C2.07925 12.3281 1.66239 10.8863 1.66131 9.41453C1.66131 5.10154 5.19397 1.58655 9.52864 1.58655C11.6291 1.58655 13.6055 2.40355 15.0854 3.88555C15.8182 4.61131 16.3989 5.47457 16.7939 6.42529C17.1889 7.37601 17.3903 8.39528 17.3864 9.42403C17.4055 13.737 13.8729 17.2425 9.53819 17.2425ZM13.8538 11.3905C13.6151 11.2765 12.4502 10.7065 12.2402 10.621C12.0206 10.545 11.8678 10.507 11.7055 10.735C11.5432 10.9725 11.0945 11.5045 10.9608 11.6565C10.8271 11.818 10.6839 11.837 10.4452 11.7135C10.2065 11.5995 9.44271 11.343 8.54523 10.545C7.83869 9.91803 7.37085 9.14853 7.22764 8.91103C7.09397 8.67353 7.20854 8.55003 7.33266 8.42653C7.43769 8.32203 7.57136 8.15103 7.68593 8.01803C7.8005 7.88503 7.84824 7.78053 7.92462 7.62853C8.001 7.46703 7.96281 7.33404 7.90553 7.22004C7.84824 7.10604 7.37085 5.94704 7.1799 5.47204C6.98894 5.01604 6.78844 5.07304 6.64523 5.06354H6.18693C6.02462 5.06354 5.77638 5.12054 5.55678 5.35804C5.34673 5.59554 4.73568 6.16554 4.73568 7.32453C4.73568 8.48353 5.58543 9.60453 5.7 9.75653C5.81457 9.91803 7.37085 12.293 9.73869 13.3095C10.302 13.5565 10.7412 13.699 11.0849 13.8035C11.6482 13.984 12.1638 13.9555 12.5744 13.8985C13.0327 13.832 13.9779 13.3285 14.1688 12.7775C14.3693 12.2265 14.3693 11.761 14.3025 11.6565C14.2357 11.552 14.0925 11.5045 13.8538 11.3905Z" fill="#FFF9F8"/></svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
