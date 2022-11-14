import './styles/App.scss'

import { IProject } from './interfaces/IProject'
import Project from './components/Project'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { Icon } from '@iconify/react'

import intropicwords from './svgs/intropicwords.svg'

function App() {
  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('/api/projects')
        setProjects(data)
        setLoading(false)
      } catch (err) {
        setError('' + err)
      }
    }
    fetchProjects()
  }, [])

  const listProjects = projects.map((project) => (
    <Project key={project._id.toString()} project={project} />
  ))

  return (
    <div>
      <header>
        <div className='handwriting-font name'>
          <span className='initial'>J</span>essica &nbsp;
          <span className='initial'>B</span>assil
        </div>
        <div className='thin-spaced-font title'>A HARDWORKING BEE</div>
      </header>

      <nav className='flex'>
        <div className='links'>
          <a>home</a>
          <a>my projects</a>
          <a>about me</a>
          <a>contact</a>
          <a>blog</a>
        </div>
        <div className='socials'>
          <a href='youtubelink'>
            <Icon className='icon' icon='akar-icons:youtube-fill' />
          </a>
          <a href='githublink'>
            <Icon icon='akar-icons:github-fill' />
          </a>
          <a href='linkedinlink'>
            <Icon icon='akar-icons:linkedin-box-fill' />
          </a>
        </div>
      </nav>

      <div className='section-intro flex'>
        <div className='left flex column'>
          <span className='handwriting-font'>&lt;html&gt;</span>
          <span className='handwriting-font body-tag'>&lt;body&gt;</span>
          <br />
          <span className='regular-font title padd-left-10'>Full Stack Developer</span>
          <span className='regular-font title padd-left-10'>Software Engineer</span>
          <span className='thin-spaced-font padd-left-10'>
            I&apos;m a programmer always looking to improve my skills and create and contribute to
            softwares
          </span>
          <br />
          <span className='handwriting-font body-tag'>&lt;body&gt;</span>
          <span className='handwriting-font'>&lt;html&gt;</span>
        </div>
        <div className='right flex'>
          <img src={intropicwords} />
        </div>
      </div>

      <div className='section-quote thin-spaced-font'>
        I always aim to write the best clean code I can.
      </div>

      <div className='section-projects'>
        <span className='title'>My Projects</span>
        <div>{listProjects}</div>
      </div>
    </div>
  )
}

export default App
