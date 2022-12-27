import React from 'react';

const Features = () => {
    return (
        <div className='mt-32 mx-10 mb-10'>
            <h1 className="lg:pt-16 text-center text-5xl font-bold leading-none sm:text-6xl">Some features of this tools</h1>

            <section className='lg:flex justify-around gap-6'>
                <div className='bg-gray-800 text-gray-100  w-full mt-20 p-10'>
                    <h1 className='text-3xl font-semibold text-center text-violet-400 border-violet-400 pb-5'>It's totally free</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque reiciendis quis animi culpa dolorem harum amet rem consequatur pariatur aspernatur, aperiam modi laudantium magnam iure unde similique eius cum?</p>
                </div>
                <div className='bg-gray-800 text-gray-100  w-full mt-20 p-10'>
                    <h1 className='text-3xl font-semibold text-center text-violet-400 border-violet-400 pb-5'>Web or Mobile</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati modi, placeat ipsam enim commodi voluptatum. Ea quae quasi architecto autem temporibus delectus, qui esse quaerat, facilis labore minima veritatis?</p>
                </div>
                <div className='bg-gray-800 text-gray-100  w-full mt-20 p-10'>
                    <h1 className='text-3xl font-semibold text-center text-violet-400 border-violet-400 pb-5'>Simplistic and Easy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum repellendus maxime amet incidunt architecto nihil, ipsam non minus nobis quas porro perspiciatis commodi reprehenderit corporis voluptatem. Veritatis omnis sint autem.</p>
                </div>
            </section>
        </div>
    );
};

export default Features;