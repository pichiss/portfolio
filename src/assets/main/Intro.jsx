import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Intro(){

    useEffect(() => {
        AOS.init();
      },[])

    return(
        <>
        <section className="intro">
            <h2 data-aos="fade-down-right">PORT</h2>
            <h2 data-aos="fade-up-left">FOLIO</h2>
            <h3 data-aos="zoom-in"
     data-aos-delay="300"
     data-aos-duration="1500">Mina Choi</h3>
            <p>FRONT-END DEVELOPER & PUBLISHER</p>
        </section>
        </>
    )
}

export default Intro;