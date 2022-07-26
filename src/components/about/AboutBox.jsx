import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon-1 icon-fire"></i>
            
            <div>
                <h3 className="about__title">18909</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon-2 icon-cup"></i>
            
            <div>
                <h3 className="about__title">567098</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon-3 icon-people"></i>
            
            <div>
                <h3 className="about__title">427454</h3>
                <span className="about__subtitle">Satisfied clients</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon-4 icon-badge"></i>
            
            <div>
                <h3 className="about__title">15879</h3>
                <span className="about__subtitle">Nominees winner</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox