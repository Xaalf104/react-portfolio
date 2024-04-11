import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  return (
    <>
      <div className="flex">
        <Hero />
      </div>
      <div className="flex">
        <About />
      </div>
    </>
  )
}

export default App
