import { IProject } from '../interfaces/IProject'

function Project(props: { project: IProject }) {
  const project = props.project

  return (
    <>
      <div className='project'>
        <img alt='project gif' className='image' src={require(`../images/${project.image}`)} />

        <div className='dash'>_</div>

        <span className='title'>{project.title}</span>
        <a href='#' className='link'>
          SEE DETAILS
        </a>
      </div>
    </>
  )
}

export default Project
