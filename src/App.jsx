import React from 'react'
import './App.css'

import {ContactCard, ExperienceCard, Header, LargeCard, Navbar, ProjectCard, SectionTitle, StartupCard} from './components'
import {AboutMe, Contact, Experience, MainPage, Projects, Startups} from './containers'

function App() {

  return (
      <div>
          <MainPage/>
          <AboutMe/>
          <Startups/>
          <Experience/>
          <Projects/>
          <Contact/>
      </div>
  )
}

export default App
