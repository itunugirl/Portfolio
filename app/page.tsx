import React from 'react'
import Hero from '@app/Hero/hero'
import Skills from '@app/Skills/page'
import Works from '@app/Work/page'
import Education from '@app/Education/page'
import Contact from '@app/Contact/page'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Works />
      <Education />
      <Contact />
    </div>
  )
}

export default HomePage