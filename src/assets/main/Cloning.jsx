import domino from '../img/proimg/image 108.png'
import biz from '../img/proimg/image 107.png'
import kt from '../img/proimg/image 141.png'
import gongju from '../img/proimg/image 142.png'
import ssoca from '../img/proimg/image 106.png'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Cloning(){
    return(
<section className='cloning'>
                    <div className='homeTxt'>
                        <p>01</p>
                        <ul>
                            <li className='protit1'>Web cloning</li>
                            <li className='procate'>Cloning</li>
                            <li className='prodate'></li>
                            <li className='protext'>홈페이지를 참고하여 웹클로닝 하였습니다.</li>
                        </ul>
                    </div>
                    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
      >
        <SwiperSlide><img src={domino} alt="" /></SwiperSlide>
        <SwiperSlide><img src={biz} alt="" /></SwiperSlide>
        <SwiperSlide><img src={kt} alt="" /></SwiperSlide>
        <SwiperSlide><img src={gongju} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ssoca} alt="" /></SwiperSlide>
      </Swiper>
                    </section>
    )
}

export default Cloning;