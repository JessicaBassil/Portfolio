import aboutimg from '../svgs/aboutimg.svg'
import React from 'react'

function AboutSection() {
  return (
    <div id='about' className='section-about flex'>
      <div className='text'>
        <span className='regular-font title'>A little About Me ...</span>
        <br />
        <br />
        <p className='light-spaced-font'>
          I&apos;m a full stack developper, mainly using MERN stack but open to using other
          technologies / stacks as well.
        </p>
        <p className='light-spaced-font'>
          I like working on different softwares both on the frontend and backend.
        </p>
        <p className='light-spaced-font'>
          Other than programmming, I like reading and watching series the most but I also enjoy
          drawing and giving back to the humanity. <br />I also speak 3 languages on a professional
          level (French, English, Arabic)
        </p>
        <a download href='cv.pdf' className='xbold-spaced-font'>
          DOWNLOAD CV
        </a>
      </div>
      <img src={aboutimg} />
    </div>
  )
}

export default AboutSection
