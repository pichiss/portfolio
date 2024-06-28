import Intro from './Intro';
import About from './About';
import './main.css'

function Main() {
    return (
      <main>
        <Intro />
        <div className='year'>
            <div>2024</div>
            <div>2024</div>
        </div>
        <About />
      </main>
    )
  }
  
  export default Main;


