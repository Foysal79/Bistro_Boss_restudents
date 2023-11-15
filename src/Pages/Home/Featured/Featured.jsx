import React from 'react';
import SectionTitel from '../../../Components/SectionTitel/SectionTitel';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-items bg-fixed p-8 my-28' >
            <SectionTitel subHeading={"check it Out"} heading={"Featured Items"} ></SectionTitel>


            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40 ' >
                <div>
                    <img className='rounded-2xl' src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 space-y-3 text-white ' >
                    <p>Aug 20, 2023</p>
                    <p className='uppercase' > Where can i get some ? </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae accusantium dolore nemo sed sint in eos odio, rerum autem obcaecati, earum quia! Perspiciatis veritatis deleniti error aliquam similique, odio magni!</p>

                    <button className='btn btn-outline border-0 border-b-4 text-white ' >Read More</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;