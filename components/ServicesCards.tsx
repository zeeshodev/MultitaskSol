import React from 'react';
import { Plus } from 'lucide-react';

const SERVICES_DATA = [
    {
        title: "WEB design & development",
        description: "Crafting responsive and stunning websites.",
    },
    {
        title: "Digital Marketing",
        description: "Boosting online presence with our Online advertising services.",
    },
    {
        title: "SEO",
        description: "Enhancing visibility with optimized SEO services Pakistan.",
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and engaging interfaces.",
    },
    {
        title: "Support & Maintenance",
        description: "Ensuring seamless performance and updates.",
    },
    {
        title: "Product Development",
        description: "Transforming ideas into market-ready products.",
    }
];

const ServicesCards = () => {
    return (
        <section className='py-24 w-full bg-background'>
            <div className='w-[85%] mx-auto flex flex-col gap-10'>
                {/* Header Section */}
                <div className='flex flex-col md:flex-row md:items-center justify-between w-full mb-16 gap-8 md:gap-4'>
                    <div className='flex flex-col items-start gap-2'>
                        <span className='text-primary tracking-widest uppercase text-sm '>
                            Our Services
                        </span>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl  text-white leading-tight'>
                            Driving Growth with <br className="hidden sm:block" />
                            <span className="text-gradient">Expert Solutions</span>
                        </h2>
                    </div>
                    <div className='shrink-0'>
                        <button className='group relative bg-primary h-12 w-full sm:w-44 rounded-full overflow-hidden text-white  text-sm tracking-widest transition-all hover:scale-105'>
                            MAIL US TODAY
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {SERVICES_DATA.map((service, index) => (
                        <div
                            key={index}
                            className='group relative bg-white min-h-[300px] p-5 md:p-16 lg:p-20 flex flex-col justify-center items-start md:items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'
                        >
                            {/* Orange Dot Top Left */}
                            <div className='absolute top-6 left-6 w-2.5 h-2.5 bg-primary rounded-full' />

                            {/* Content */}
                            <div className='max-w-xs md:max-w-64 flex flex-col gap-6'>
                                <h3 className='text-2xl font-bold text-neutral-800 leading-tight uppercase'>
                                    {service.title}
                                </h3>
                                <p className='text-neutral-500 text-base leading-relaxed'>
                                    {service.description}
                                </p>
                            </div>

                            {/* Plus Icon Bottom Right */}
                            <div className='absolute bottom-0 right-0 w-12 h-12 bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110'>
                                <Plus className='text-white w-6 h-6' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCards;