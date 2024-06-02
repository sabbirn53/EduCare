import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for your better career</h1>
            <p>Our systematic education is design to empower students with the knowledge, experiences and skills needed to build up a nation to educated</p>

            <button className="btn">Explore More <img src={dark_arrow} alt=""  width={20}/></button>
        </div>
    </div>
  )
}

export default Hero