import ARleft from '../svgs/ARleft.svg'
import ARright from '../svgs/ARright.svg'
import { IProject } from '../interfaces/IProject'
import Project from '../components/Project'

import { useEffect, useState } from 'react'
import axios from 'axios'
import useWindowDimensions from '../utils/useWindowDimensions'

function ProjectsSection() {
  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { height, width } = useWindowDimensions()
  // const displayCount = useState(3)
  // const startIndex = useState(0)

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
    <div className='section-projects' id='projects'>
      <span className='title handwriting-font'>My Projects</span>
      {height + ',' + width}

      <div className='projects'>
        <button>
          <img src={ARleft} alt='<' />
        </button>
        {loading ? 'Loading...' : listProjects}
        {error && error}
        <button>
          <img src={ARright} alt='<' />
        </button>
      </div>
    </div>
  )
}

export default ProjectsSection
