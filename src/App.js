import React, { Suspense } from 'react'
import './scss/custom.css'
import Loader from'./components/Loader'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Navbar = React.lazy(() => import("./components/Navbar"))
const Hero = React.lazy(() => import("./components/Hero"))
const About = React.lazy(() => import("./components/About"))
const Skills = React.lazy(() => import("./components/Skills"))
const Portfolio = React.lazy(() => import("./components/Portfolio"))
const ContactMe = React.lazy(() => import("./components/ContactMe"))
const Footer = React.lazy(() => import("./components/Footer"))

function App() {
  return (
    <div
      id='all'
      class="container-fluid"
      style={{ background: '#171717' }}>
      <Suspense id='all' fallback={<Loader id='all'/>}>
        <div class='row'>

          <Navbar/>

          <div
            data-aos="fade-up"
            data-aos-duration="1500">
            <Hero/>
          </div>

          <About/>

          <Skills/>

          <Portfolio/>

          <div
            data-aos="fade-up"
            data-aos-duration="1500">
            <ContactMe/>
          </div>

          <Footer/>
          
        </div>
      </Suspense> 
    </div>
  );
}
export default App;
