import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/booki.png'
import IMG2 from '../../assets/oh_my_food.png'
import IMG3 from '../../assets/la_chouette_agence.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Transformez une maquette en site web avec HTML & CSS',
    github: 'https://github.com/MaltaverneAurelien/Booki_Projet_2_OpenClassRoom',
    demo: 'http://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Dynamisez une page web avec des animations CSS',
    github: 'https://github.com/MaltaverneAurelien/Ohmyfood_Projet_3_OpenClassRoom',
    demo: 'http://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Optimisez un site web existant',
    github: 'https://github.com/MaltaverneAurelien/LaChouetteAgence_Projet_4_OpenClassRoom',
    demo: 'http://dribbble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <h5>Mes projets récents</h5>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank'>Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio