import Intro from './Intro';
import About from './About';
import Skill from './Skill';
import './main.css'
import Project from './Project';

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
      </main>
    )
  }
  
  export default Main;


