import React from 'react';
import img from '../../assets/Time management-cuate.png'

const Banner = () => {
    return (
        <div className='lg:h-[90vh]'>
            <div className='lg:flex justify-between items-center'>
                <div className='pl-10'>
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Manage your task <br /> <span className='text-violet-400 border-violet-400'>online </span></h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Placeat ea minima ab similique repellat. Dolorum, eius quasi maiores porro omnis voluptates  quas illo dignissimos necessitatibus distinctio animi harum atque vero!</p>
                </div>
                <div>
                    <img className='' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;