import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Fade, Slide } from "react-awesome-reveal";
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
            <Slide triggerOnce={true}>
                <h2 className="content-title">
                    <span className='text-gradient'>Projects</span> <span className='text-secondary'>crafted with love.</span>
                </h2>
            </Slide>
            <div className="work-container left">
                <Fade triggerOnce={true} delay={600} duration={400}>
                    <img className="work-image" src={workImage} alt="aimage" />
                </Fade>
                <Fade triggerOnce={true} direction={'right'} delay={600} duration={600}>
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
                </Fade>
            </div>
            <div className="work-container right">
                <Fade triggerOnce={true} direction={'left'} delay={600} duration={400}>
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
                </Fade>
                <Fade triggerOnce={true} delay={600} duration={600}>
                    <img className="work-image" src={workImage} alt="aimage" />
                </Fade>
            </div>
            <div className="other-work-container">
                <Slide triggerOnce={true}>
                    <h2 className="text-center">
                        <span className='text-gradient'>Other Works</span>
                    </h2>
                    <h4 className="text-center text-secondary">Some of Apps and Systems that I created.</h4>
                </Slide>
                
                <div className="box-container">
                    {DUMMY_DATA.map(work => (
                        <Fade triggerOnce={true} delay={300 + (work.id * 200)}>
                            <WorkItem work={work} key={work.id} />
                        </Fade>
                    ))}
                </div>
            </div> 
        </section>
    )
}

export default Work