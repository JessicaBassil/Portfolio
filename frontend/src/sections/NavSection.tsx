import { Icon } from '@iconify/react'
import { useState } from 'react'

function NavSection() {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  return (
    <nav className={openNav ? 'flex open' : 'flex'}>
      <div className='links slide-toright'>
        <button onClick={toggleNav} className='menu'>
          <Icon icon='material-symbols:menu' />
        </button>
        <button onClick={toggleNav} className='close'>
          <Icon icon='material-symbols:close' />
        </button>
        <a onClick={toggleNav} href='#home'>
          home
        </a>
        <a onClick={toggleNav} href='#projects'>
          my projects
        </a>
        <a onClick={toggleNav} href='#about'>
          about me
        </a>
        <a onClick={toggleNav} href='#contact'>
          contact
        </a>
        <a onClick={toggleNav} href='#blog'>
          blog
        </a>
      </div>
      <div className='socials  slide-toleft'>
        <a href='https://youtube.com'>
          <Icon className='icon' icon='akar-icons:youtube-fill' />
        </a>
        <a href='https://github.com/JessicaBassil'>
          <Icon icon='akar-icons:github-fill' />
        </a>
        <a href='https://www.linkedin.com/in/jessica-bassil-260057190/'>
          <Icon icon='akar-icons:linkedin-box-fill' />
        </a>
      </div>
    </nav>
  )
}

export default NavSection
