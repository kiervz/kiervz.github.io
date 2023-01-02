import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Fade, Slide } from "react-awesome-reveal";
import kveyStoreImage from '../assets/images/kvey-store.png'
import theMealRecipeImage from '../assets/images/the-meal-recipe.png'
import './Work.css'
import WorkItem from './WorkItem'

const DUMMY_DATA = [
    {
        id: 1,
        githubLink: 'https://github.com/kiervz/musikafy',
        external: {
            available: false,
            link: 'https://kiervz.github.io'
        },
        title: 'Musikafy (Work in progress)',
        content: 'A React JS clone application of the popular Spotify music streaming service. This application consumes the Shazam Core API.',
        technologies: [
            {id: 1, name: 'React JS'},
            {id: 2, name: 'Tailwind CSS'},
            {id: 3, name: 'TypeScript'}
        ]
    },
    {
        id: 2,
        githubLink: 'https://github.com/kiervz/kiervz.github.io',
        external: {
            available: true,
            link: 'https://kierveymaghanoy.com/'
        },
        title: 'My Portfolio',
        content: 'The second iteration of Kiervey Maghanoy\'s portfolio and was built from scratch using React JS and hosted with Github Pages.',
        technologies: [
            {id: 1, name: 'HTML'},
            {id: 2, name: 'CSS'},
            {id: 3, name: 'React JS'}
        ]
    },
    {
        id: 3,
        githubLink: 'https://github.com/kiervz/todo-app',
        external: {
            available: true,
            link: 'https://todo-react-ts-v1.web.app/'
        },
        title: 'Todo List Application',
        content: 'Simple Todo Application was built using React JS, Typescript, Tailwind CSS and Firebase.',
        technologies: [
            {id: 1, name: 'React JS'},
            {id: 2, name: 'Tailwind CSS'},
            {id: 3, name: 'Typescript'},
            {id: 4, name: 'Firebase'}
        ]
    },
    {
        id: 4,
        githubLink: 'https://github.com/kiervz/stack-underflow',
        external: {
            available: false,
            link: null
        },
        title: 'Stack Underflow',
        content: 'Real time single page app forum (Stackoverflow Inspired) developed in Laravel 8 RESTful API & Vue.js.',
        technologies: [
            {id: 1, name: 'Laravel'},
            {id: 2, name: 'Vue JS'},
            {id: 3, name: 'Vuetify'},
            {id: 4, name: 'Laravel Websockets'}
        ]
    },
    {
        id: 5,
        githubLink: 'https://github.com/kiervz/laravel-vue-js-library',
        external: {
            available: false,
            link: null
        },
        title: 'e-Library Management System',
        content: 'SPA e-Library management system developed in Laravel 8, RESTful API & Vue.js.',
        technologies: [
            {id: 1, name: 'Laravel'},
            {id: 2, name: 'Vue JS'},
        ]
    },
    {
        id: 6,
        githubLink: 'https://github.com/kiervz/coronavirus',
        external: {
            available: true,
            link: 'https://kierveymaghanoy.com/coronavirus/'
        },
        title: 'Corona Virus Tracker',
        content: 'Simple Covid-19 Tracker Worldwide using JQuery, Bootstrap and Chart.js.',
        technologies: [
            {id: 1, name: 'HTML'},
            {id: 2, name: 'CSS'},
            {id: 3, name: 'Javascript'},
            {id: 4, name: 'Jquery'},
            {id: 5, name: 'Bootstrap'},
            {id: 6, name: 'Chart.js'}
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
                <Fade triggerOnce={true} delay={200} duration={400}>
                    <img className="work-image" src={kveyStoreImage} alt="aimage" />
                </Fade>
                <Fade triggerOnce={true} delay={600} duration={600}>
                    <div className="work-description right">
                        <div>
                            <h5 className="featured-text">Featured Project</h5>
                            <h2 className="description-title">Kvey Store</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                        <div>
                            <ul className="language-use right">
                                <li><span>Laravel</span></li>
                                <li><span>React JS</span></li>
                                <li><span>TypeScript</span></li>
                                <li><span>Tailwind CSS</span></li>
                                <li><span>AWS EC2, RDS & S3</span></li>
                                <li><span>Stripe</span></li>
                            </ul>
                            <p className="project-link">
                                <a href="https://github.com/kiervz/kvey-store" target='__blank'>
                                    <FaGithub />
                                </a>
                                <a href="https://kvey-store.vercel.app/" target='__blank'>
                                    <FaExternalLinkAlt />
                                </a>
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="work-container right">
                <Fade triggerOnce={true} delay={200} duration={400}>
                    <div className="work-description left">
                        <div>
                            <h5 className="featured-text">Featured Project</h5>
                            <h2 className="description-title">The Meal Recipe</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                        <div>
                            <ul className="language-use left">
                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>React JS</span></li>
                            </ul>
                            <p className="project-link">
                                <a href="https://github.com/kiervz/themealrecipe" target='__blank'>
                                    <FaGithub />
                                </a>
                                <a href="https://kierveymaghanoy.com/themealrecipe" target='__blank'>
                                    <FaExternalLinkAlt />
                                </a>
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade triggerOnce={true} delay={600} duration={600}>
                    <img className="work-image" src={theMealRecipeImage} alt="aimage" />
                </Fade>
            </div>
            <div className="other-work-container">
                <Slide triggerOnce={true}>
                    <h2 className="text-center">
                        <span className='text-gradient'>Other Works</span>
                    </h2>
                    <h4 className="text-center text-secondary">Some of practice projects that I did in the past to brush up my skills.</h4>
                </Slide>
                
                <div className="box-container">
                    {DUMMY_DATA.map(work => (
                        <Fade triggerOnce={true} delay={300 + (work.id * 200)} key={work.id} >
                            <WorkItem work={work}/>
                        </Fade>
                    ))}
                </div>
            </div>
            <Fade triggerOnce={true} delay={600} duration={600}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a className='other-projects' href='https://github.com/kiervz?tab=repositories'>
                        <FaGithub /> Other Projects Here
                    </a>
                </div>
            </Fade>
        </section>
    )
}

export default Work