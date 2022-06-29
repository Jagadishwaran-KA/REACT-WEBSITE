import "./Contact.css";

import second from './Vector 1.png'

function Contact() {
  return (
    <div>
        <div className="jojo">
        <h1 className="pic">Let's Talk</h1>
        <img  className="gb" src = {second} alt = "avatar" />
        <div className="free">
        <div class="contact-form-wrapper d-flex justify-content-center">
            <form action="#" class="contact-form">
            <h1 class="title">Stay in the Loop</h1>
            <div>
                <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
            </div>
            <div>
                <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
            </div>
            <div>
                <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="6" cols="30" placeholder="Message" required></textarea>
            </div>
            <div class="submi-butt-wrapper">
                <input type="submit" value="Send" />
            </div>
            </form>
            <p className="pp">I am Living in Chennai.You can Contact me any time.<br />
            Having a project? Let's Discuss about it.I Make your <br /> Business Look
            Great
            </p>
        </div>
        </div>
        </div>
    </div>

    
  )
}



export default Contact