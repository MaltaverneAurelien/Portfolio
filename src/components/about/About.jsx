import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserCog} from 'react-icons/fa'
import {BsFolder2Open} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h2>À propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserCog className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Année de travail</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Formation</h5>
              <small>Niveau 5 RNCP (Bac+2)</small>
            </article>

            <article className="about__card">
              <BsFolder2Open className="about__icon" />
              <h5>Projects</h5>
              <small>7+ projet complet</small>
            </article>
          </div>
            <p>
              Hello, je suis Aurélien Maltaverne, Développeur Web Fullstack Junior, j'ai terminé une formation diplomante BAC+2 récemment
              et je suis à la recherche de nouveaux défis, passionné par le streaming depuis 4 ans, j'ai l'habitude d'apprendre de nouvelles technologies
              tout au long de l'année.
            </p>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About