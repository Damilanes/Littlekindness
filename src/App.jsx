import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Books from './Components/Books/Books'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Services/>
      <Projects/>
      <Books/>
      <Contact/>
      <Footer/>
      
      
    </div>
  )
}

export default App
