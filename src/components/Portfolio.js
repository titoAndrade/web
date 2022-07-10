import { Carousel } from 'react-bootstrap'
import mobileImg from './images/workinprogress-mobile.png'
import laptopImg from './images/workinprogress-desktop.png'
import searchkeerMobile from './images/searchkeer-mobile.png'
import searchkeerDesktop from './images/searchkeer-desktop.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Portfolio = () => {
  return (
    
    // G L O B A L
    <div 
    data-aos="fade-up"
    data-aos-duartion="1500"
    class="container mt-5"
         id='portfolio'
         style={{
          height: '90vh',
          marginBottom: '8em'
          }}>
      
      <div 
        data-aos="fade-up"
        data-aos-duartion="3000"
        class="row justify-content-center mt-5"
        style={{ marginTop: '10em' }}>

        {/* T I T L E */}
        <div class="row justify-content-center me-1">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3" style={{ fontFamily: 'anton'}}>
           <h1 class="dbTitle" style={{ fontSize: '4em', textAlign: 'center', marginBottom: '4vmin'}}>My Work</h1>
          </div>
        </div>  

        <Carousel>

          {/* I T E M  # 1 */}
          <Carousel.Item>
            <div
              id='itemContainer'
              data-aos="fade-up"
              data-aos-duration="1500"
              class="row justify-content-center">
              <div class="col-10 align-items-center" style={{ height: '65vh', marginBottom:'1em' }}>
                
                <div class="container ms-4" style={{ marginTop: '2em' }}>
                  <div class="row">
                    
                    {/* M O B I L E */}
                    <div id='devices' class="col-xl-2 col-lg-2 col-md-3" style={{ height: '20em', padding: 0, marginRight: '-1.5em', marginTop: '1em' }}>
                      <img
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        src={searchkeerMobile}
                        alt=""
                        style={{
                          height: '65%',
                          marginLeft: '2em'
                        }}/>
                    </div>

                    {/* L A P T O P */}
                    <div id='devices' class="col-xl-6 col-lg-6 col-md-8" style={{ height: '24vmax', padding: 0, marginTop: '1em' }}>
                      <img
                        class="'laptopImg'"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        src={searchkeerDesktop}
                        alt=""
                        style={{
                          height: '90%',
                          marginTop: '2em'
                        }}/>
                    </div>
                    
                    {/* T E X T */}
                    <div
                      id='textwork'
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      class="col-xl-4 col-lg-4 col-md-11 col-sm-10 "
                      style={{ padding: 0, marginRight: '0em', marginTop: '0em', paddingInline: '1em' }}>
                        
                      <div class="mt-4" style={{ color: '#fff', fontFamily: 'Prata', fontWeight: '600' }}>
                        <h1 class="mt-2 mb-4" style={{ fontFamily: 'Arima', fontSize: '4em', textShadow: '2px 4px 15px #000' }}>SearchKeer</h1>
                        <p>This is a Web App that allows you to find quality photos from the 'unsplash API' for free, you can find original photos and download from the app or go to the oficial unsplash site and choose another resolution </p>
                        <a href="https://searchkeer.netlify.app/" target="_blank" rel="noreferrer">
                          <button
                            class="btn btn-primary mt-2"
                            style={{
                              background: '#DA0037',
                              color: '#EDEDED',
                              border: 'none',
                            }}>visit
                          </button>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </Carousel.Item>

          {/* I T E M  # 2 */}
          <Carousel.Item>
            <div
              id='itemContainer'
              data-aos="fade-up"
              data-aos-duration="1500"
              class="row justify-content-center">
              <div class="col-10 align-items-center" style={{ height: '65vh', marginBottom:'1em' }}>
                
                <div class="container ms-4" style={{ marginTop: '2em' }}>
                  <div class="row">

                    {/* T E X T */}
                    <div
                      id='textwork'
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      class="col-xl-4 col-lg-4 col-md-11 col-sm-10 "
                      style={{ padding: 0, marginTop: '0em', paddingInline: '1em' }}>
                        
                      <div class="mt-4" style={{ color: '#fff', fontFamily: 'roboto', fontWeight: '300' }}>
                        <h1 class="mt-2 mb-4" style={{ fontFamily: 'yellowtail', fontSize: '4em', textShadow: '2px 4px 15px #000' }}>Work in Progress</h1>
                        <p>coming soon! coming soon! coming soon! coming soon! coming soon! coming soon! coming soon! coming soon! coming soon! coming soon! coming soon! coming soon!</p>
                        {/* <a href="" target="_blank" rel="noreferrer">
                        <button
                            class="btn btn-primary mt-2"
                            style={{
                              background: '#DA0037',
                              color: '#EDEDED',
                              border: 'none',
                            }}>go to project
                          </button>
                        </a> */}
                      </div>
                    </div>
                    
                    {/* L A P T O P */}
                    <div id='devices' class="col-xl-6 col-lg-6 col-md-8" style={{ height: '24vmax', padding: 0, marginRight: '-1.5em', marginTop: '1em' }}>
                      <img
                        class="'laptopImg'"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        src={laptopImg}
                        alt=""
                        style={{
                          height: '90%',
                          marginTop: '2em'
                        }}/>
                    </div>
                    
                    {/* M O B I L E */}
                    <div id='devices' class="col-xl-2 col-lg-2 col-md-3" style={{ height: '20em', padding: 0, marginTop: '1em' }}>
                      <img
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        src={mobileImg}
                        alt=""
                        style={{
                          height: '65%',
                          marginLeft: '2em'
                        }}/>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </Carousel.Item>

        </Carousel>
        
      </div>

    </div>

  )
}

export default Portfolio

