import './Hero.css';

            
import logo from "./Layer 2.png"

import pathwork from "./Group 184.png";



function Hero() {
  return (
    <div>
        <div className = "n">
        <aside>
            <div  className = "nb">
            <h1 className = "m">I'm Jagadish!</h1>
            <h1 className = "b">Full Stack Developer</h1>
            <p>Hey I am Just an ordinary boy who is chasing his dreams.<br></br>Believe in Science fiction.Knows how to develop a full stack <br></br> application.Interested in UI/UX designing.Loyality Matters.</p>

            <div className = "liq">
              <h3 className='lq'>I Make Your Business Look Great</h3>
              <h3 className='lq'></h3>
            </div>
            </div>
            </aside>
            <img className = "isl" src = {logo} alt = "illustration" />
       
        </div>

        <img className = "path" src = {pathwork} alt = "Group 184.png" />

      </div>
  )
}

export default Hero