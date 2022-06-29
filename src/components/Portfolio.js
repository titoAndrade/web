import { Carousel } from 'react-bootstrap'
import mobileImg from './images/portfolio_project_1_responsive.png'
import laptopImg from './images/portfolio_project_1.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Portfolio = () => {
  return (
    
    // G L O B A L
    <div 
    data-aos="fade-up"
    data-aos-duartion="1500"
    class="container"
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
        <div class="row justify-content-center mb-5 me-1">
          <div class="col-lg-2 col-sm-2" style={{ fontFamily: 'anton'}}>
           <h1 class="dbTitle" style={{ fontSize: '3.5em', textAlign: 'center'}}>My Work</h1>
          </div>
        </div>  

        <Carousel>

          {/* I T E M  # 1 */}
          <Carousel.Item>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              class="row justify-content-center">
              <div class="col-10 align-items-center" style={{ height: '65vh' }}>
                
                <div class="container ms-4" style={{ marginTop: '2em' }}>
                  <div class="row">
                    
                    {/* D E V I C E S */}
                    <div
                      class="col-7"
                      style={{ 
                        height: '20em',
                        padding: 0
                          }}>
                      
                      <img
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        src={mobileImg}
                        alt=""
                        style={{
                          height: '65%',
                          marginLeft: '2em'
                        }}/>

                      <img
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        src={laptopImg}
                        alt=""
                        style={{
                          height: '90%',
                          marginTop: '2em'
                        }}/>
                    </div>
                    
                    {/* T E X T */}
                    <div id='textwork'
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      class="col-lg-4 col-sm-4 ms-5"
                      style={{ 
                        height: '20em'
                          }}>
                      <div class="mt-4" style={{ color: '#fff', fontFamily: 'roboto', fontWeight: '300' }}>
                        <h1 class="mt-2 mb-4" style={{ fontFamily: 'yellowtail', fontSize: '4em', textShadow: '2px 4px 15px #000' }}>Project Name</h1>
                        <p>description description description description description description description description description description description description</p>
                        <a href="#">
                          <button class="btn btn-primary mt-2">go to</button>
                        </a>
                        <img src="" alt="" />
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
              data-aos="fade-up"
              data-aos-duration="1500"
              class="row justify-content-center">
              <div class="col-10 align-items-center" style={{ height: '65vh' }}>
                
                <div class="container ms-4" style={{ marginTop: '2em' }}>
                  <div class="row">
                    
                    {/* T E X T */}
                    <div id='textwork2'
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      class="col-lg-4 col-sm-4 ms-4"
                      style={{ 
                        height: '20em'
                          }}>
                      <div class="mt-4" style={{ color: '#fff', fontFamily: 'roboto', fontWeight: '300' }}>
                        <h1 class="mt-2 mb-4" style={{ fontFamily: 'yellowtail', fontSize: '4em', textShadow: '2px 4px 15px #000' }}>Project Name</h1>
                        <p>description description description description description description description description description description description description</p>
                        <a href="#">
                          <button class="btn btn-primary mt-2">go to</button>
                        </a>
                        <img src="" alt="" />
                      </div>
                    </div>

                    {/* D E V I C E S */}
                    <div
                      class="col-7"
                      style={{ 
                        height: '20em',
                        padding: 0
                          }}>
                      
                      <img
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        src={laptopImg}
                        alt=""
                        style={{
                          height: '90%',
                          marginTop: '2em'
                        }}/>

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

