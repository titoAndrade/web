import photo from './images/photo-about-final-min.png'
import photoBack from './images/photoback.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const About = () => {
  return (
    <div class="container-fluid mt-5" id='about'>

      <div class="row justify-content-center" id='cont'
           style={{
            alignContent: 'center',
            alignItems: 'center'
           }}>
            
        {/* I M A G E */}
        <div 
          data-aos="fade-right"
          data-aos-duration="2000"
          id='image'
          class="col-4 mt-4 me-5"
          style={{
            height: '100vh'
          }}>
           
          <div class="mt-4"
            style={{
              marginTop: '-4em'
            }}>

            <img class="photoBack"
              src={photo} alt=""
              style={{
                background: 'transparent',
                height: '90vh',
                position: 'absolute',
                zIndex: 100
            }}/>
            <img 
              src={photoBack} alt=""
              style={{
                background: 'transparent',
                height: '90vh',
                position: 'relative',
                zIndex: 0
            }}/>
          </div>
        
        </div>
        
        {/* A B O U T  B O X */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          class="col-lg-6 col-sm-5"
          id='boxShadows'
          style={{
            color: '#ededed',
            height: '85vh',
            padding: '2em',
            border: 'solid 1px #EDEDED',
            }}>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            class="row">

            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              class="col-lg-6 col-sm-3">
              <h1 class="aboutTitle"
                style={{
                fontFamily: 'anton',
                fontWeight: 400,
                fontSize: '70px',
                letterSpacing: 0,
              }}>About me
              </h1>
            </div>

            <div class="col-1" id='lordiTitle'> 
              <lord-icon
                src="https://cdn.lordicon.com/xqnbvely.json"
                trigger="hover"
                colors="primary:#DA0037,secondary:#171717"
                style={{
                  width: '90px',
                  height: '90px',
                  marginLeft: -40,
                  marginTop: -30
                  }}>
              </lord-icon>
            </div>

          </div>

          {/* A B O U T  T E X T */}
          <div
            class="aboutText"
            data-aos="fade-up"
            data-aos-duration="1800"
            style={{
              color: '#ededed',
              textAlign: 'justify',
              marginTop: '1rem',
              fontSize: '22px',
              fontFamily: 'roboto',
              fontWeight: '300',
            }}>
             <p>Hi, I'm <b class="aboutTitle" style={{ fontSize: '20px', fontFamily: 'roboto', fontWeight: '600', letterSpacing: 0 }}>Tito Andrade</b>, I'm a <b class="aboutTitle" style={{ fontSize: '20px', fontFamily: 'roboto', fontWeight: '600', letterSpacing: 0 }}>self-taught </b>junior web developer, To train myself I invested a lot of time doing research to find the right courses, tutorials and of course, I read official documentation of different technologies used for both frontend and backend.</p>
             
             <p style={{ marginTop: -10 }}>
             I would like to start working in a company where I can continue learning and mastering different technologies and languages ​​and become a <b class="aboutTitle" style={{ fontSize: '20px', fontFamily: 'roboto', fontWeight: '600', letterSpacing: 0 }}>World-class</b> developer!
             </p>

          </div>
          {/* O F F - L I N E  I N T E R E S T */}
          <div id='interest'
          data-aos="fade-right"
          data-aos-duration="600"
          class="row mt-4">
            <div class="col-lg-3 col-sm-4">
              <h2 
                class="offLineTitle"
                style={{
                  fontFamily: 'anton',
                  fontWeight: 400,
                  fontSize: '35px',
                  textIndent: 4,
                  textAlign: 'left'
                }}>Off-line
              </h2>
            </div>

            <div class="row mt-1 justify-content-center"
                 id="offlineicons"
                 style={{
                   textAlign: 'center'
                 }}>

              <div class="col-lg-2 col-sm-1">
                <lord-icon title="gaming"
                  src="https://cdn.lordicon.com/ktxpktdd.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#DA0037"
                  style={{ width: '60px', height: '60px', cursor: 'pointer'}}>
                </lord-icon>
              </div>
              <div class="col-lg-2 col-sm-1 ms-4">
                <lord-icon title="mma"
                  src="https://cdn.lordicon.com/ibgjiwvi.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#DA0037"
                  style={{ width: '60px', height: '60px', cursor: 'pointer'}}>
                </lord-icon>
              </div>
              <div class="col-lg-2 col-sm-1 ms-4">
                <lord-icon title="movies & series"
                  src="https://cdn.lordicon.com/tdxypxgp.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#DA0037"
                  style={{ width: '60px', height: '60px', cursor: 'pointer'}}>
                </lord-icon>
              </div>
              <div class="col-lg-2 col-sm-1 ms-4">
                <lord-icon title="scotch & beer"
                  src="https://cdn.lordicon.com/szzsfswk.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#DA0037"
                  style={{ width: '60px', height: '60px', cursor: 'pointer'}}>
                </lord-icon>
              </div>
              <div class="col-lg-2 col-sm-1 ms-4">
                <lord-icon title="pizza"
                  src="https://cdn.lordicon.com/jpdtnwas.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#DA0037"
                  style={{ width: '60px', height: '60px', cursor: 'pointer'}}>
                </lord-icon>
              </div>

            </div>

          </div>

          
        </div>

      </div>
    </div>
  )
}

export default About 