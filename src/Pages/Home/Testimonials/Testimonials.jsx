
import SectionTitel from '../../../Components/SectionTitel/SectionTitel';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [])

    return (
        <div className='my-20' >
            <SectionTitel subHeading={"What About Client Say"} heading={"Testimonials"} ></SectionTitel>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide key={review._id}  >
                <div className='px-36 text-center flex flex-col items-center space-y-4 ' >
                <Rating 
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />

                    <p>{review.details}</p>
                    <h3 className='text-2xl text-orange-400' >{review.name}</h3>
                </div>
            </SwiperSlide> )
        }
      </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;