import './styles/App.scss'
import SpecialHover from './components/SpecialHover'

import pcpic from './svgs/pcpic.svg'
import waves from './svgs/waves.svg'
import github from './svgs/github.svg'
import linkedin from './svgs/linkedin.svg'
import youtube from './svgs/youtube.svg'
import menu from './svgs/menu.svg'

import { IProject } from './interfaces/IProject'
import Project from './components/Project'

function App() {
  const projects: IProject[] = [
    {
      id: 1,
      title: 'title',
      image: 'test.png',
      link: 'linktoproject',
    },
    {
      id: 2,
      title: 'title2',
      image: 'test.png',
      link: 'linktoproject2',
    },
    {
      id: 3,
      title: 'title3',
      image: 'test.png',
      link: 'linktoproject3',
    },
  ]

  const listProjects = projects.map((project) => (
    <Project key={project.id.toString()} project={project} />
  ))

  return (
    <div className='full-screen'>
      <SpecialHover />

      <div className='flex space-between header sticky'>
        <div className='handwriting-font signature-style logo'>Jessi</div>
        <div>
          <a className='special-word-effect' href='#'>
            My Projects
          </a>
          <a className='special-word-effect' href='#'>
            About Me
          </a>
          <a className='special-word-effect' href='#'>
            My Skills
          </a>
          <a className='special-word-effect' href='#'>
            Blog
          </a>
        </div>
      </div>

      <div className='body'>
        <div className='flex space-around height-50 top-section'>
          <div className='handwriting-font about'>
            <div className='shadow'>
              <div className='shadow'></div>
            </div>
            <div className='flex column space-between'>
              <div>
                <span className='special-letter-effect'>H</span>
                <span className='special-letter-effect'>e</span>
                <span className='special-letter-effect'>y</span>
                <span className='special-letter-effect'>,</span>
                <br /> <span className='special-letter-effect'>I</span>
                <span className='special-letter-effect'> &apos; </span>
                <span className='special-letter-effect'>m</span>
                <span className='signature-style special-word-effect'> Jessica </span>
                <span className='special-letter-effect'>,</span>
                <br />
                <div className='role flex column'>
                  <div>
                    <span className='special-letter-effect'>Full </span>
                    <span className='special-letter-effect'>Stack </span>
                    <span className='special-letter-effect'>Developer </span> <br />
                  </div>
                  <div>
                    <span className='special-letter-effect'>Software </span>
                    <span className='special-letter-effect'>Engineer </span>
                  </div>
                </div>
              </div>
              <div className='flex column'>
                <button className='contact-btn'>Contact Me</button>
                <div className='flex socials'>
                  <a href='#' className='special-letter-effect'>
                    <img src={youtube} alt='youtube' />
                  </a>
                  <a href='https://github.com/JessicaBassil' className='special-letter-effect'>
                    <img src={github} alt='github' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/jessica-bassil-260057190/'
                    className='special-letter-effect'
                  >
                    <img src={linkedin} alt='linkedin' />
                  </a>
                </div>
              </div>
            </div>
            <div className='background-shadow'></div>
          </div>
          <div className='height-50 image'>
            <div className='shadow'>
              <div className='shadow  shadow-child'></div>
            </div>
            <img className='height-50' src={pcpic} />
          </div>
        </div>

        <div className='waves flex'>
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
          <img src={waves} />
        </div>

        <span className='title flex column'>My Projects</span>
        <div className='flex row projects'>{listProjects}</div>
      </div>
    </div>
  )
}

export default App
