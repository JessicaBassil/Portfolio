import './styles/App.scss'

import HeaderSection from './sections/HeaderSection'
import NavSection from './sections/NavSection'
import IntroSection from './sections/IntroSection'
import QuoteSection from './sections/QuoteSection'
import ProjectsSection from './sections/ProjectsSection'
import EmptySection from './sections/EmptySection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import BlogSection from './sections/BlogSection'
import FooterSection from './sections/FooterSection'

function App() {
  return (
    <div>
      <HeaderSection />
      <NavSection />
      <IntroSection />
      <QuoteSection />
      <ProjectsSection />
      <EmptySection />
      <AboutSection />
      <EmptySection />
      <ContactSection />
      <EmptySection />
      <BlogSection />
      <FooterSection />
    </div>
  )
}

export default App
