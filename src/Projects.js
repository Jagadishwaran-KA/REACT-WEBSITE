import "./Project.css"
import img from "./Vector 1.png";
import project from "./Group 191.png";


function Projects() {
  return (



    <div>

        <h4 className = "header">Projects</h4>
        <div className = "self-comrade">
             <img   src = {img} alt = "ls" />        
        </div>

        <div className = "opse">
                <img src = {project} alt = "pump" />
        </div>

  
    </div>


    )
}

export default Projects