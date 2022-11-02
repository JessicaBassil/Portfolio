import { IProject } from '../interfaces/IProject'
import pin from '../svgs/pin.svg'

function Project(props: { project: IProject }) {
  const project = props.project

  return (
    <>
      <div className='project flex column'>
        <img className='pin' src={pin} alt='pin' />
        <div className='flex column credentials'>
          <img alt='project gif' className='image' src={require(`../images/${project.image}`)} />
          <span>{project.title}</span>
        </div>
      </div>
    </>
  )
}

export default Project
