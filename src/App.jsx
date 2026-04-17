import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Rooms from "./components/Rooms"
import About from "./components/About"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Rooms />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App