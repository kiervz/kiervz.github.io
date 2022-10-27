import React from 'react'
import { Slide } from 'react-awesome-reveal'

import SkillsTechnology from './SkillsTechnology'
import HtmlLogo from '../assets/images/svg/html.svg'
import CssLogo from '../assets/images/svg/css.svg'
import JsLogo from '../assets/images/svg/js.svg'
import ReactLogo from '../assets/images/svg/react.svg'
import VueLogo from '../assets/images/svg/vue.svg'
import BootstrapLogo from '../assets/images/svg/bootstrap.svg'
import TailwindLogo from '../assets/images/svg/tailwind.svg'
import TypescriptLogo from '../assets/images/svg/typescript.svg'
import PhpLogo from '../assets/images/svg/php.svg'
import LaravelLogo from '../assets/images/svg/laravel.svg'
import MysqlLogo from '../assets/images/svg/mysql.svg'
import AwsLogo from '../assets/images/svg/aws.svg'
import GitLogo from '../assets/images/svg/git.svg'
import CodeBranchLogo from '../assets/images/svg/code-branch.svg'
import CodeSlashLogo from '../assets/images/svg/code-slash.svg'
import ToolsLogo from '../assets/images/svg/tools.svg'
import PostmanLogo from '../assets/images/svg/postman.svg'
import TrelloLogo from '../assets/images/svg/trello.svg'
import FigmaLogo from '../assets/images/svg/figma.svg'

import './skills.css'

const Skills = () => {
  return (
    <section id="skill" className="skills">
      <Slide triggerOnce={true}>
        <h2 className="content-title">
          <span className='text-gradient'>Skills </span> <span className='text-secondary'>acquired.</span>
        </h2>
      </Slide>
      <div className="skills-container">
          { technologies.map(technology => (
            <Slide 
              cascade 
              damping={0.1} 
              triggerOnce={true}
              key={technology.title} 
              className='card'
            >
              <SkillsTechnology 
                technology={technology} 
                key={technology.title} 
              />
            </Slide>
            ))}
      </div>
    </section>
  )
}

const technologies = [
  {
    title: "Frontend Technologies",
    image: CodeSlashLogo,
    data: [
      {
        id: 1,
        title: "HTML",
        image: HtmlLogo
      },
      {
        id: 2,
        title: "CSS",
        image: CssLogo
      },
      {
        id: 3,
        title: "Javascript",
        image: JsLogo
      },
      {
        id: 4,
        title: "React JS",
        image: ReactLogo
      },
      {
        id: 5,
        title: "Vue JS",
        image: VueLogo
      },
      {
        id: 6,
        title: "Bootstrap",
        image: BootstrapLogo
      },
      {
        id: 7,
        title: "Tailwind CSS",
        image: TailwindLogo
      },
      {
        id: 8,
        title: "TypeScript",
        image: TypescriptLogo
      },
    ]
  },
  {
    title: "Backend Technologies",
    image: CodeBranchLogo,
    data: [
      {
        id: 1,
        title: "PHP",
        image: PhpLogo
      },
      {
        id: 2,
        title: "Laravel",
        image: LaravelLogo
      },
      {
        id: 3,
        title: "MySQL",
        image: MysqlLogo
      },
      {
        id: 4,
        title: "AWS",
        image: AwsLogo
      }
    ]
  },
  {
    title: "Others",
    image: ToolsLogo,
    data: [
      {
        id: 1,
        title: "Git",
        image: GitLogo
      },
      {
        id: 2,
        title: "Postman",
        image: PostmanLogo
      },
      {
        id: 3,
        title: "Trello",
        image: TrelloLogo
      },
      {
        id: 4,
        title: "Figma",
        image: FigmaLogo
      },
    ]
  }
];

export default Skills