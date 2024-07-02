import Intro from './Intro';
import About from './About';
import Skill from './Skill';
import './main.css'
import Project from './Project';
import Web from './Web';
import Cloning from './Cloning';

function Main() {
  
    return (
      <main>
        <Intro />
        <div className='year'>
            <div>2024</div>
            <div>2024</div>
        </div>
        <About />
        <Skill />
        <Project />
        <Web />
        <Cloning />

      </main>
    )
  }
  
  export default Main;


