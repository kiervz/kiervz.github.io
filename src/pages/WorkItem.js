import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaRegFolder } from 'react-icons/fa'
import './Work.css'

const WorkItem = ({work}) => {
    return (
        <div className="box-card">
            <div className="box-header">
                <div className="box-top">
                    <FaRegFolder className='box-folder-icon' />
                    <div className="box-links">
                        <a 
                            href={work.githubLink} 
                            target="_blank" 
                            rel="noreferrer">
                            <FaGithub />
                        </a>
                        {work.external.available 
                        && <a 
                            href={work.external.link} 
                            target="_blank" 
                            rel="noreferrer">
                            <FaExternalLinkAlt />
                        </a>}
                    </div>
                </div>
                <div className="box-title">
                    <p>{work.title}</p>
                </div>
                <div className="box-content">
                    <p>{work.content}</p>
                </div>
            </div>
            <div className="box-footer">
                <ul>
                    {work.technologies.map(tech => (
                        <li key={tech.id}><span className='tech'>{tech.name}</span></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WorkItem