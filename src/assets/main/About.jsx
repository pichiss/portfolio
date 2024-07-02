function About(){
    return(
        <>
        <section className="about">
            <article>
                <div>
                    <div className="face"><img src="../../../public/rakko.png" alt="rakko" /></div>
                </div>
                <div className="aboutTxt">
                    <h4>About me</h4>
                    <ul>
                        <li className="infoTit">1.Infomation
                            <ul>
                                <li>최미나</li>
                                <li>1993년 11월 10일 출생</li>
                                <li>경기도 남양주시 거주</li>
                                <li>010-7607-1998</li>
                                <li>eii1998@naver.com</li>
                            </ul>
                        </li>
                        <li className="infoTit">2.Education
                            <ul>
                                <li>인덕대학교 비서과 졸업<br />
                                2012.02~2015.02</li>
                                <li>그린컴퓨터아카데미 노원점<br />
                                WebGL(3D API)을 활용한<br />
                                Motion UI 프론트엔드<br />
                                웹앱개발자 양성과정<br />
                                2024.01~2024.08</li>
                            </ul>
                        </li>
                        <li className="infoTit">3.Certificate
                            <ul>
                                <li>웹디자인기능사</li>
                                <li>운전면허(2종보통)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </article>
            <article>
                <h2 data-aos="flip-left" data-aos-duration="1500">MINACHOI</h2>
                <h3 data-aos="flip-left" data-aos-duration="1000">MinaChoi</h3>
            </article>
        </section>
        </>
    )
}

export default About;