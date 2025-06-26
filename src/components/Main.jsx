import Nav from "./Nav"
import Hero from './Hero'
import Project from "./Project"
import Testimonial from "./Testimonial"
import Footer from "./Footer"

const Main = () => {
  return (
    <div className="bg-indigo-600">
        <Nav/>
        <Hero/>
        <Project/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Main
