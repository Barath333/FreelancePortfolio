import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App