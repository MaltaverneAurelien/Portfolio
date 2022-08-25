import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aur%C3%A9lien-maltaverne" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/MaltaverneAurelien" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials