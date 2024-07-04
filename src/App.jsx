import Header from './assets/header/Header';
import Main from './assets/main/main';
import './assets/common.css';
import './assets/reset.css';
import Footer from './assets/footer/footer';
import { useRef, useEffect } from 'react';


function App() {
  // const containerRef = useRef();

  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     const { deltaY } = e;
  //     const { scrollTop } = containerRef.current; // 현재 스크롤 위치
  //     const pageHeight = window.innerHeight; // 화면 세로 길이, 100vh와 같습니다.
  //     const totalPages = 12; // 총 페이지 수
  
  //     const currentPage = Math.floor(scrollTop / pageHeight);
      
  //     if (deltaY > 0) {
  //       // 스크롤 내릴 때
  //       if (currentPage < totalPages) {
  //         containerRef.current.scrollTo({
  //           top: (currentPage + 1) * pageHeight,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //       }
  //     } else {
  //       // 스크롤 올릴 때
  //       if (currentPage > 0) {
  //         containerRef.current.scrollTo({
  //           top: (currentPage - 1) * pageHeight,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //   };
  
  //   const outerDivRefCurrent = containerRef.current;
  //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //   };
  // }, []);

  return (
    <>
      <Header />
      <div 
      // ref={containerRef} 
      className='container'>
      <Main />        
      <Footer />
      </div>

    </>
  )
}

export default App
