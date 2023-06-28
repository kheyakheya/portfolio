
import About from './About'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './HOME.JSX'
import Projects from './Projects'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <section id='home' className='h-screen'>
    <Home></Home>
     </section>
    <section id='about' >
    <About></About>
     </section>
    <section id='projects'>
    <Projects></Projects>
     </section>
    </>
  )
}

export default App
