import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaRegFolder } from 'react-icons/fa'
import workImage from '../assets/images/shoe.jpg'
import './Work.css'

const Work = () => {
    return (
        <section id="work" className="work">
                <h2 className="content-title">Work</h2>
                <div className="work-container left">
                    <img className="work-image" src={workImage} alt="aimage" />
                    <div className="work-description right">
                        <h5 className="featured-text">Featured Project</h5>
                        <h2 className="description-title">Shoe Web</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                        <ul className="language-use right">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React JS</li>
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
                <div className="work-container right">
                    <div className="work-description left">
                        <h5 className="featured-text">Featured Project</h5>
                        <h2 className="description-title">Shoe Web</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cumque quibusdam laboriosam beatae blanditiis voluptatibus ab! Laborum illo temporibus reiciendis fugiat maiores iure est distinctio nulla, magni, quos illum perferendis?</p>
                        <ul className="language-use left">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React JS</li>
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
                    <h2 className="text-center">Other Works</h2>
                    <h5 className="text-center text-success">List of App and System that I created.</h5>
                    
                    <div className="box-container">
                        <div className="box-card">
                            <div className="box-header">
                                <div className="box-top">
                                    <FaRegFolder className='box-folder-icon' />
                                    <div className="box-links">
                                        <a href="#a">
                                            <FaGithub />
                                        </a>
                                        <a href="#a">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                <div className="box-title">
                                    <p>Ecommerce Website</p>
                                </div>
                                <div className="box-content">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Minima magnam fugit sed consectetur nihil, alias et explicabo autem tempore nisi libero.
                                    </p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React JS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-card">
                            <div className="box-header">
                                <div className="box-top">
                                    <FaRegFolder className='box-folder-icon'/>
                                    <div className="box-links">
                                        <a href="#a">
                                            <FaGithub />
                                        </a>
                                        <a href="#a">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                <div className="box-title">
                                    <p>Ecommerce Website</p>
                                </div>
                                <div className="box-content">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Minima magnam fugit sed consectetur nihil, alias et explicabo autem tempore nisi libero.
                                    </p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React JS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-card">
                            <div className="box-header">
                                <div className="box-top">
                                    <FaRegFolder className='box-folder-icon'/>
                                    <div className="box-links">
                                        <a href="#a">
                                            <FaGithub />
                                        </a>
                                        <a href="#a">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                <div className="box-title">
                                    <p>Ecommerce Website</p>
                                </div>
                                <div className="box-content">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Minima magnam fugit sed consectetur nihil, alias et explicabo autem tempore nisi libero.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, ut accusantium. Natus sit voluptatem minus blanditiis repellendus ducimus mollitia voluptatum sunt iste? Temporibus placeat, eaque unde dolores dignissimos ducimus nihil?
                                    </p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React JS</li>
                                </ul>
                            </div>
                        </div>    
                        <div className="box-card">
                            <div className="box-header">
                                <div className="box-top">
                                    <FaRegFolder className='box-folder-icon'/>
                                    <div className="box-links">
                                        <a href="#a">
                                            <FaGithub />
                                        </a>
                                        <a href="#a">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                <div className="box-title">
                                    <p>Ecommerce Website</p>
                                </div>
                                <div className="box-content">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Minima magnam fugit sed consectetur nihil, alias et explicabo autem tempore nisi libero.
                                    </p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React JS</li>
                                </ul>
                            </div>
                        </div>        
                    </div>
                </div> 
            </section>
    )
}

export default Work