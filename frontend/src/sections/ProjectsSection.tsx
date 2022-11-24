import { IProject } from '../interfaces/IProject'
import Project from '../components/Project'

import { useEffect, useState } from 'react'
import axios from 'axios'

function ProjectsSection() {
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
    <div className='section-projects' id='projects'>
      <span className='title handwriting-font'>
        <span>My Projects</span>
      </span>

      <div className='projects'>{loading ? 'Loading...' : listProjects}</div>
      {error && error}
    </div>
  )
}

export default ProjectsSection
