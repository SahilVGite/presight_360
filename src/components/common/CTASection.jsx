import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function CTASection({
    title = 'Contact Us for Intelligence and advisory services',
    subtitle = 'Having difficulties choosing the right solution for your business?',
}) {
    return (
        <section className="sec-gap overflow-hidden relative">
            <div className="main-wrapper">
                <div className='flex justify-between items-end [@media(max-width:768px)]:flex-wrap'>
                    <h2 className="font-display font-bold uppercase max-w-[67.1875rem] leading-[1.2] mb-10 [font-size:var(--fs-banner-title)]">
                        {title}
                    </h2>
                    <p className="[font-size:var(--fs-body-lg)] font-normal text-white max-w-[20.3125rem] mb-10">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-9">
                    <div className='w-full border border-white rounded-4xl lg:rounded-[3.75rem] p-5 md:p-[2rem] lg:p-[3.125rem] flex [@media(max-width:610px)]:gap-2 [@media(max-width:610px)]:flex-col justify-between items-center'>
                        <h3 className='text-white font-semibold [font-size:var(--fs-title-xl)]'>Talk With Us</h3>
                        <div className="">
                            <Link href="/solutions">
                                <Button variant="primary" size="sm" showArrow>
                                    Explore Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full border border-white  rounded-4xl lg:rounded-[3.75rem] p-5 md:p-[2rem] lg:p-[3.125rem]'>
                        <h3 className='text-white font-semibold [font-size:var(--fs-title-xl)] mb-10'>Book An Appointment </h3>
                        <form action="">
                            <div className='flex  [@media(max-width:767px)]:flex-col gap-6'>
                                <input type="email" placeholder="Enter email address" className='[font-size:var(--fs-body-sm)] px-4 py-4 md:py-6 lg:py-8 bg-white/10 rounded-[.5rem] w-full'/>
                                <input type="number" placeholder="Enter Phone Number " className='[font-size:var(--fs-body-sm)] px-4 py-4 md:py-6 lg:py-8 bg-white/10 rounded-[.5rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full'/>
                            </div>
                            <div className="mt-9 text-end">
                                <Link href="/solutions">
                                    <Button variant="primary" size="sm" showArrow>
                                        Explore Now
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
