import React from 'react'
import { Slide } from 'react-awesome-reveal'

const SkillsTechnology = ({ technology }) => {
  return (
    <>
        <div className='card-title__container'>
            <div className='card-image'>
                <img src={technology.image} alt={technology.title + ' icon'} />
            </div>
            <div className='card-title'>
                {technology.title}
            </div>
        </div>
        <div className='languages-container'>
            {technology.data.map(tech => (
                <Slide cascade damping={0.1} triggerOnce={true} key={tech.id}>
                    <div className='card-mini'>
                        <img src={tech.image} alt='test'/>
                        <span>{tech.title}</span>
                    </div>
                </Slide>
            ))}
        </div>
    </>
  )
}

export default SkillsTechnology