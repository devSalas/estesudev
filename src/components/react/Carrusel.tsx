import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './carrusel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const initialState =[
    "./food_app.jpg",
    "./food_order.jpg",
    "./project_main.jpg"
]


export default  function Carrusel() {
    const [images,setImagenes] = useState(initialState)
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       {
        images?.length>0
        ?(
            images?.map((img,index)=>(
                <SwiperSlide key={index}>
                <img src={img} />
              </SwiperSlide>
            ))
        )
        : <p>No hay imagenes</p>
       }

      </Swiper>
    </>
  );
}
