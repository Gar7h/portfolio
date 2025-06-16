import About from './components/About'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import Hero from './components/hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  return (

  <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"> 
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="relative min-h-screen w-full bg-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(62,62,62,0.6),transparent)]"> </div> 
    </div> 
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
          </div>
        
  </div>
  
  )
  
}

export default App
