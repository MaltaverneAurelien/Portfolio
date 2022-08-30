import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>maltaverneaurelien@gmail.com</h5>
            <a href="mailto:maltaverneaurelien@gmail.com" target="_blank" aria-label="Send Mail">Send a message</a>
          </article>
          <article className="contact__option">
            <FaGithub />
            <h4>Github</h4>
            <h5>https://github.com/MaltaverneAurelien</h5>
            <a href="https://github.com/MaltaverneAurelien" target="_blank" aria-label="Github">Click here</a>
          </article>
          <article className="contact__option">
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>https://www.linkedin.com/in/aurélien-maltaverne/</h5>
            <a href="https://www.linkedin.com/in/aur%C3%A9lien-maltaverne" target="_blank" aria-label="Linkedin">Click here</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact