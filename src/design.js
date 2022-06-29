import "./design.css";

import line from "./Line 5.png";
import logo from "./Group 185.png";


function design() {
  return (
    <div>

        <div className="design-1">
                
                <img className="bg" src = {logo} alt = "hehe" />
                <div>
                        <h1>DESIGN STUDIO</h1>
                        <h4 className="web">Web Design</h4>
                        <img src = {line} alt="sd" className="line" />
                        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nunc vulputate libero et velit interdum,<br></br> ac aliquet odio mattis. Class aptent  <br></br>  taciti sociosqu ad .
                        </p>
                </div>
              
        </div>


    </div>
  )
}

export default design