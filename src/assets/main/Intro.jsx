import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Intro(){

    useEffect(() => {
        AOS.init();
      },[])

    return(
        <>
        <div className='year'>
            <div>2024</div>
            <div>2024</div>
        </div>
        <section id="intro" className="intro">
            <h2 data-aos="fade-down-right"
            data-aos-duration="1500">PORT</h2>
            <h2 data-aos="fade-up-left"
            data-aos-duration="1500">FOLIO</h2>
            <h3 data-aos="fade-up"
     data-aos-delay="1000"
     data-aos-duration="1500">Mina Choi</h3>
            <p>FRONT-END DEVELOPER & PUBLISHER</p>
        </section>

        </>
    )
}

export default Intro;