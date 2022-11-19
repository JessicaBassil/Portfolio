import { Icon } from '@iconify/react'

function NavSection() {
  return (
    <nav className='flex'>
      <div className='links'>
        <a href='#home'>home</a>
        <a href='#projects'>my projects</a>
        <a href='#about'>about me</a>
        <a href='#contact'>contact</a>
        <a href='#blog'>blog</a>
      </div>
      <div className='socials'>
        <a href='youtubelink'>
          <Icon className='icon' icon='akar-icons:youtube-fill' />
        </a>
        <a href='githublink'>
          <Icon icon='akar-icons:github-fill' />
        </a>
        <a href='linkedinlink'>
          <Icon icon='akar-icons:linkedin-box-fill' />
        </a>
      </div>
    </nav>
  )
}

export default NavSection
