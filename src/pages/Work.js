import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import workImage from '../assets/images/shoe.jpg'
import './Work.css'
import WorkItem from './WorkItem'

const DUMMY_DATA = [
    {
        id: 1,
        githubLink: 'https://github.com/kiervz/kiervz.github.io',
        external: {
            available: true,
            link: 'https://kiervz.github.io'
        },
        title: 'Fake E-commerce',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima magnam fugit sed consectetur nihil, alias et explicabo autem tempore nisi libero.',
        technologies: [
            {id: 1, name: 'HTML'},
            {id: 2, name: 'CSS'},
            {id: 3, name: 'Javascript'},
            {id: 4, name: 'React JS'}
        ]
    },
    {
        id: 2,
        githubLink: 'https://github.com/kiervz/kiervz.github.io',
        external: {
            available: false,
            link: null
        },
        title: 'Fake E-commerce',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis? blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis? blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?',
        technologies: [
            {id: 1, name: 'HTML'},
            {id: 2, name: 'CSS'},
            {id: 3, name: 'Javascript'},
            {id: 4, name: 'React JS'}
        ]
    },
    {
        id: 3,
        githubLink: 'https://github.com/kiervz/kiervz.github.io',
        external: {
            available: false,
            link: null
        },
        title: 'Fake E-commerce',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima magnam fugit sed consectetur nihil, alias et explicabo autem tempore nisi libero.',
        technologies: [
            {id: 1, name: 'HTML'},
            {id: 2, name: 'CSS'},
            {id: 3, name: 'Javascript'},
            {id: 4, name: 'React JS'}
        ]
    },
]

const Work = () => {
    return (
        <section id="project" className="work">
                <h2 className="content-title">
                    <span className='text-gradient'>Projects</span> <span className='text-secondary'>crafted with love.</span>
                </h2>
                <div className="work-container left">
                    <img className="work-image" src={workImage} alt="aimage" />
                    <div className="work-description right">
                        <div>
                            <h5 className="featured-text">Featured Project</h5>
                            <h2 className="description-title">Shoe Web</h2>
                        </div>
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                        </div>
                        <div>
                            <ul className="language-use right">
                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>Javascript</span></li>
                                <li><span>React JS</span></li>
                            </ul>
                            <p className="project-link">
                                <a href="#a">
                                    <FaGithub />
                                </a>
                                <a href="#a">
                                    <FaExternalLinkAlt />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work-container right">
                    <div className="work-description left">
                        <h5 className="featured-text">Featured Project</h5>
                        <h2 className="description-title">Shoe Web</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                        <ul className="language-use left">
                            <li><span>HTML</span></li>
                            <li><span>CSS</span></li>
                            <li><span>Javascript</span></li>
                            <li><span>React JS</span></li>
                        </ul>
                        <p className="project-link">
                            <a href="#a">
                                <FaGithub />
                            </a>
                            <a href="#a">
                                <FaExternalLinkAlt />
                            </a>
                        </p>
                    </div>
                    <img className="work-image" src={workImage} alt="aimage" />
                </div>
                <div className="other-work-container">
                    <h2 className="text-center">
                        <span className='text-gradient'>Other Works</span>
                    </h2>
                    <h4 className="text-center text-secondary">Some of Apps and Systems that I created.</h4>
                    
                    <div className="box-container">
                        {DUMMY_DATA.map(work => (
                            <WorkItem work={work} key={work.id} />
                        ))}
                    </div>
                </div> 
            </section>
    )
}

export default Work