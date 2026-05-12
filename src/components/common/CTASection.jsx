import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function CTASection({
    title = 'Contact Us for Intelligence and advisory services',
    subtitle = 'Having difficulties choosing the right solution for your business?',
}) {
    return (
        <section className="py-[clamp(4rem,8vw,8rem)] overflow-hidden relative">
            <div className="max-w-[102.1875rem] mx-auto">
                <div className='flex justify-between items-end'>
                    <h2 className="font-display font-bold uppercase max-w-[67.1875rem] leading-[1.2] mb-10 text-[clamp(1.75rem,3.2vw,3.875rem)]">
                        {title}
                    </h2>
                    <p className="text-[1.25rem] font-normal text-white max-w-[20.3125rem] mb-10">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-9">
                    <div className='w-full border-[1px] border-white rounded-[3.75rem] p-[3.125rem] flex justify-between items-center'>
                        <h3 className='text-white font-semibold text-[clamp(1.25rem,2.2vw,2.1875rem)]'>Talk With Us</h3>
                        <div className="">
                            <Link to="/solutions">
                                <Button variant="primary" size="sm" showArrow>
                                    Explore Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full border-[1px] border-white rounded-[3.75rem] p-[3.125rem]'>
                        <h3 className='text-white font-semibold text-[clamp(1.25rem,2.2vw,2.1875rem)] mb-10'>Book An Appointment </h3>
                        <form action="">
                            <div className='flex gap-6'>
                                <input type="email" placeholder="Enter email address" className='text-sm px-4 py-8 bg-white/10 rounded-[.5rem] w-full'/>
                                <input type="number" placeholder="Enter Phone Number " className='text-sm px-4 py-8 bg-white/10 rounded-[.5rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full'/>
                            </div>
                            <div className="mt-9 text-end">
                                <Link to="/solutions">
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
