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
  const siteList = [
    {
      id : 1,
      img : domino,
      tit : '도미노피자',
      text : `2024.02.05~02.06
html, css 사용`,
      site : 'https://web.dominos.co.kr/main',
      page : 'https://pichiss.github.io/dominopre/'
    },
    {
      id : 2,
      img : biz,
      tit : '롯데 비즈카',
      text : `2024.02.07~02.08
html, css 사용`,
      site : 'https://business.lotterental.com/main.do',
      page : 'https://pichiss.github.io/bizcar/'
    },
    {
      id : 3,
      img : kt,
      tit : 'kt&g 장학재단',
      text : `2024.02.07~02.08
html, css 사용`,
      site : 'https://scholarship.ktngtogether.com/index.do',
      page : 'https://pichiss.github.io/bizcar/ktng'
    },
    {
      id : 4,
      img : gongju,
      tit : '국립공주박물관',
      text : `2024.02.07~02.08
html, css 사용`,
      site : 'https://gongju.museum.go.kr/kor/index.do',
      page : 'https://pichiss.github.io/museum/'
    },
    {
      id : 5,
      img : ssoca,
      tit : '쏘카',
      text : `2024.02.07~02.08
react 사용`,
      site : 'https://www.socar.kr/',
      page : 'https://pichiss.github.io/ssoca/'
    },
  ]


    return(
<section id='cloning' className='cloning'>
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
            pauseOnMouseEnter : true
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
      >
        {siteList.map(function(site){
          return(
            <SwiperSlide key={site.id}>
              <img src={site.img} alt={site.tit} />
              <div className='siteHover'>
                <h5>{site.tit}</h5>
                <pre>{site.text}</pre>
                <button><a href={site.site} target='blank'>Go Original</a></button>
                <button><a href={site.page} target='blank'>Go Cloning</a></button>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
                    </section>
    )
}

export default Cloning;