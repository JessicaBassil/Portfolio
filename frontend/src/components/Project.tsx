import { useState } from 'react'
import { IProject } from '../interfaces/IProject'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Icon } from '@iconify/react'

function Project(props: { project: IProject }) {
  const project = props.project
  const [detailsShown, setDetailsShown] = useState(false)
  const toggleDetailsShown = () => {
    setDetailsShown(!detailsShown)
  }

  function replaceWithBr(text: string) {
    return text.replace(/\n/g, '<br />')
  }

  return (
    <>
      <div className='project'>
        <img alt='project gif' className='image' src={require(`../images/${project.image}`)} />

        <div className='dash'>_</div>

        <span className='title'>{project.title}</span>
        <button className='link xbold-spaced-font' onClick={toggleDetailsShown}>
          SEE DETAILS
        </button>

        {detailsShown && (
          <div className='details'>
            <button onClick={toggleDetailsShown} className='close'>
              <Icon icon='material-symbols:close' />
            </button>

            <span className='title'>{project.title}</span>

            <div className='slide-container'>
              <Carousel className='carousel' showArrows autoPlay showThumbs={false}>
                {project.medias.map((media, index) => (
                  <div
                    key={index}
                    style={{ backgroundImage: 'url(' + require(`../images/${media}`) + ')' }}
                  ></div>
                ))}
              </Carousel>
            </div>

            {project.github && (
              <a href={project.github} target='_blank' rel='noreferrer'>
                Click here to view the code on github
              </a>
            )}

            <p
              className='desc'
              dangerouslySetInnerHTML={{ __html: replaceWithBr(project.description) }}
            ></p>
          </div>
        )}
      </div>
    </>
  )
}

export default Project
