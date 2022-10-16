import './styles/App.scss'
import SpecialHover from './components/SpecialHover'
import pcpic from './svgs/pcpic.svg'
import waves from './svgs/waves.svg'

function App() {
  return (
    <div className='full-screen'>
      <SpecialHover />

      <div className='flex space-between header sticky'>
        <div className='handwriting-font signature-style logo'>Jessi</div>
        <div>
          <a className='special-word-effect' href='#'>
            About Me
          </a>
          <a className='special-word-effect' href='#'>
            My Projects
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
              <div>
                <button className='contact-btn'>Contact Me</button>
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

        <div>my projects etc etc</div>
      </div>
    </div>
  )
}

export default App
