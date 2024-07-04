import './header.css'
import { useRef, useState } from 'react';


function Navi() {
  const [menu, setMenu] = useState(false);
  const [moreOpen , setMoreOpen] = useState(false);
  function openMore(){
    setMoreOpen(moreOpen => !moreOpen);
    setMenu(menu => !menu);
  }

    return (
      <header>
        <nav>
            <h1><a href="#">Mina Choi</a></h1>
            <div className='ham'>
              <a className={menu ? "menu-trigger active" : "menu-trigger"} href="#" onClick={openMore}>
                <span></span>
                <span></span>
                <span></span>
                </a>
            </div>
        </nav>
        <div>
        <ul className={moreOpen ? "more show" : "more hide"} >
            <li><a href="#intro">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#project">PROJECT</a></li>
            <li><a href="#cloning">CLONING</a></li>
            <li><a href="#contact">CONTACT ME</a></li>
        </ul>
    </div>
      </header>
    )
  }
  
  export default Navi
