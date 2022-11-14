import { IProject } from '../interfaces/IProject'

function Project(props: { project: IProject }) {
  const project = props.project

  return (
    <>
      <div className='project flex column'>
        <div className='flex column credentials'>
          <img alt='project gif' className='image' src={require(`../images/${project.image}`)} />
          <span>{project.title}</span>
        </div>
      </div>
    </>
  )
}

export default Project
