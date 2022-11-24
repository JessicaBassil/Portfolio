import intropicmain from '../svgs/intropicmain.svg'
import introsidetext from '../svgs/introsidetext.svg'

function IntroSection() {
  return (
    <div className='section-intro flex'>
      <div className='left flex column slide-toleft'>
        <span className='handwriting-font'>&lt;html&gt;</span>
        <span className='handwriting-font body-tag'>&lt;body&gt;</span>
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
      <div className='right flex slide-toright'>
        <img src={intropicmain} />
        <img className='side-text' src={introsidetext} />
      </div>
    </div>
  )
}

export default IntroSection
