import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';



function Cloning(){
    return(
<section className='prolist'>
                    <div className='homeTxt'>
                        <p></p>
                        <ul>
                            <li className='protit'>01</li>
                            <li className='procate'>Web cloning</li>
                            <li className='prodate'>Cloning</li>
                            <li className='protext'>홈페이지를 참고하여 웹클로닝 하였습니다.</li>
                        </ul>
                    </div>
                        <div className='homepage'>
                        <ul>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                        </ul>
                    </div>
                    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
                    </section>
    )
}

export default Cloning;