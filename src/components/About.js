import photo from './images/photo-about-final-min.png'
import photoBack from './images/photoback.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const About = () => {
  return (
    <div class="container-fluid" id='about'>

      <div class="row justify-content-center" id='cont'
           style={{
            alignContent: 'center',
            alignItems: 'center',
           }}>
            
        {/* I M A G E */}
        <div 
          data-aos="fade-right"
          data-aos-duration="2000"
          id='image'
          class="col-xl-5 col-md-12 "
          style={{
            textAlign: 'center',
            margin: '1vmax',
            marginLeft:'-4vmax',
            marginRight: '5vmax'
          }}>
           
          <img
            class="photoBack"
            src={photo} alt=""
            style={{
              background: 'transparent',
              height: '90vh',
              position: 'absolute',
              zIndex: 100,
            }}
          />

          <img 
            src={photoBack} alt=""
            style={{
              background: 'transparent',
              height: '90vh',
              position: 'relative',
              zIndex: 0
            }}
          />
        
        </div>
        
        {/* A B O U T  B O X */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          class="col-xl-6 col-lg-6 col-md-11 col-sm-12"
          id='boxShadows'
          style={{
            color: '#ededed',
            padding: '2em',
            border: 'solid 1px #EDEDED',
            }}>


          {/* A B O U T  T I T L E */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            class="row">
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <h1 class="aboutTitle"
                style={{
                fontFamily: 'anton',
                fontWeight: 400,
                fontSize: '6vmax',
                margin: 0,
                padding: 0
                }}>About me
                <lord-icon id='lordiTitle'
                  src="https://cdn.lordicon.com/xqnbvely.json"
                  trigger="hover"
                  colors="primary:#DA0037,secondary:#171717"
                  style={{
                    width: '15vmin',
                    height: '15vmin',
                    marginTop: '-8vmin',
                    marginLeft: '1vmax'
                  }}
                />
              </h1>
            </div>
          </div>

          {/* A B O U T  T E X T */}
          <div class="row mt-3">
            <div
              class="col-12"
              data-aos="fade-up"
              data-aos-duration="1800"
              style={{
                color: '#ededed',
                textAlign: 'justify',
                fontSize: '130%',
                fontFamily: 'roboto',
                fontWeight: '300',
              }}>
              <p>Hi, I'm <b class="aboutTitle" style={{ fontSize: '20px', fontFamily: 'roboto', fontWeight: '600', letterSpacing: 0 }}>Tito Andrade</b>, I'm a <b class="aboutTitle" style={{ fontSize: '20px', fontFamily: 'roboto', fontWeight: '600', letterSpacing: 0 }}>self-taught </b>junior web developer, To train myself I invested a lot of time doing research to find the right courses, tutorials and of course, I read official documentation of different technologies used for both frontend and backend.</p>
              
              <p style={{ marginTop: -10 }}>
              I would like to start working in a company where I can continue learning and mastering different technologies and languages ​​and become a <b class="aboutTitle" style={{ fontSize: '20px', fontFamily: 'roboto', fontWeight: '600', letterSpacing: 0 }}>World-class</b> developer!
              </p>
              
            </div>
          </div>

          {/* O F F - L I N E  I N T E R E S T  T I T L E */}
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            class="row mt-4">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-5">
              <h2 
                class="aboutTitle"
                style={{
                  fontFamily: 'anton',
                  fontWeight: 400,
                  fontSize: '3em',
                  textIndent: 4,
                  textAlign: 'left'
                }}>Off-line
              </h2>
            </div>
          </div>

          {/* O F F - L I N E  I N T E R E S T   I C O N S */}
          <div class="row mt-1" id="offlineicons">
          
            <div class="col-12" style={{ textAlign: 'center' }}>
 
              <lord-icon title="gaming"
                src="https://cdn.lordicon.com/ktxpktdd.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#DA0037"
                style={{ marginRight: '4.9vmin', width: '12vmin', height: '12vmin', cursor: 'pointer'}}>
              </lord-icon>

              <lord-icon title="mma"
                src="https://cdn.lordicon.com/ibgjiwvi.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#DA0037"
                style={{ marginRight: '4.9vmin', width: '5.5vmax', height: '5.5vmax', cursor: 'pointer'}}>
              </lord-icon>
                            
              <lord-icon title="movies & series"
                src="https://cdn.lordicon.com/tdxypxgp.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#DA0037"
                style={{ marginRight: '4.9vmin', width: '5.5vmax', height: '5.5vmax', cursor: 'pointer'}}>
              </lord-icon>
                            
              <lord-icon title="scotch & beer"
                src="https://cdn.lordicon.com/szzsfswk.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#DA0037"
                style={{ marginRight: '4.9vmin', width: '5.5vmax', height: '5.5vmax', cursor: 'pointer'}}>
              </lord-icon>
                            
              <lord-icon title="pizza"
                src="https://cdn.lordicon.com/jpdtnwas.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#DA0037"
                style={{ marginRight: '4.9vmin', width: '5.5vmax', height: '5.5vmax', cursor: 'pointer'}}>
              </lord-icon>
              
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default About 