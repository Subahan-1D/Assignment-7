import React from 'react';

const Banner = () => {
    return (
        <div
            className="bg-[url('https://res.cloudinary.com/dospsrwzj/image/upload/v1710732761/vvdsnkd7yzeeft70a3zz.png')] bg-cover bg-center bg-blue-950 flex flex-col lg:flex-row gap-7 justify-between rounded-3xl mt-20 p-7 lg:p-28 w-[1200px] h-[600px] ">

            <div className='text-center text-white mt-20'>
                <h1 className='text-5xl text-white font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='mt-2'>
                Indulge in the rich flavors of Italy with this creamy spaghetti carbonara. Perfectly cooked spaghetti noodles tossed in a decadent sauce made from eggs, crispy bacon, Parmesan cheese, and a hint of black pepper</p>
                <div className='flex gap-5 mt-5 ml-[380px]'>
                    <button className="btn bg-[#0BE58A]  border-none ">Explore Now</button>
                    <button className="btn   border-none ">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;