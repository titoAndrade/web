import html from './icons/cib-html5.png'
import css from './icons/cib-css3-shiled.png'
import js from './icons/cib-javascript.png'
import react from './icons/cib-react.png'
import nodeJs from './icons/nodeJs.png'
import bootstrap from './icons/cib-bootstrap.png'
import mysql from './icons/cib-mysql.png'
import mongoDB from './icons/cib-mongodb.png'
import git from './icons/cib-git.png'
import npm from './icons/cib-npm.png'
import vscode from './icons/cib-visual-studio-code.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Skills = () => {
  return (

    // G L O B A L  C O N T A I N E R
    <div class="container-fluid" style={{ marginTop: '10em', marginBottom: '8em', color: '#EDEDED' }} id='skills'>

      {/* T I T L E  T E C H N O L O G I E S */}
      <div class="row justify-content-center"
        data-aos="fade-up"
        data-aos-duration="1500">
        <div class="col-xl-4 col-lg-4 col-md-6" id="techTitle" style={{ fontFamily: 'anton'}}>
          <h1 class="technologiesTitle"
            style={{
              fontSize: '4em',
              textAlign: 'center',
              marginBottom: '1em',
            }}>
            Technologies
          </h1>
        </div>
      </div>

      {/* L A N G U A G E S */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <div class="row d-flex justify-content-around mt-4" style={{ marginBottom: '5em', }}>

          {/* R O T A T E  T I T L E */}
          <div class="col-1" id='languageTitle' style={{width: '10vmax', borderRight: 'solid 1px #DA0037' }}>
            <span class="langTitle"
                  style={{
                    marginTop: '10.5em',
                    fontFamily: 'anton',
                    letterSpacing: 6,
                  }}>
              <h2>Languages</h2>
            </span>
          </div>
          
          {/* C O N T E N T */}
          <div class="col flex-shrink-1"
            style={{
              fontFamily: 'roboto',
              fontWeight: '300',
              fontSize: '1.65vmax',
              paddingLeft: '2em',
              paddingTop: '1em'
            }}>
            <h3>Html5</h3>
            <p>hypertext markup language - semantic</p>
            <h3>Css3</h3>
            <p>cascade style sheets - strong knowledge</p>
            <h3>JavaScript</h3>
            <p>logic - events - OOP</p>
          </div>

          {/* I C O N S */}
          <div class="col-xl-6 mt-5" id='iconsTec'>
            
            <div data-aos="fade-up" data-aos-duration="1000">
              <div class="row justify-content-center align-items-center mt-5">
                <div class="col-3 ms-1 me-1">
                  <img id='icon' src={html} alt="" style={{ height: '6vmax', }}/>
                </div>                
                <div class="col-3 ms-1 me-3">
                  <img id='icon' src={css} alt="" style={{ height: '7vmax', }}/>
                </div>                
                <div class="col-3 ms-1 me-1">
                  <img id='icon' src={js} alt="" style={{ height: '6vmax', }}/>
                </div>
              </div>
            </div>
          
          </div>

        </div>
      </div>

      {/* F R A M E W O R K S */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <div class="row d-flex justify-content-around mt-4" style={{ marginBottom: '5em', }}>

          {/* I C O N S */}
          <div class="col-xl-6 mt-5" id='iconsFrameworks'>
            
            <div data-aos="fade-up" data-aos-duration="1000">
              <div class="row justify-content-center align-items-center mt-5">
                <div class="col-3 ms-1 me-1">
                  <img id='icon' src={react} alt="" style={{ height: '6vmax', }}/>
                </div>                
                <div class="col-3 ms-1 me-3">
                  <img id='icon' src={nodeJs} alt="" style={{ height: '6vmax', }}/>
                </div>                
                <div class="col-3 ms-1 me-1">
                  <img id='icon' src={bootstrap} alt="" style={{ height: '5.5vmax', }}/>
                </div>
              </div>
            </div>
          
          </div>

          {/* R O T A T E  T I T L E */}
          <div class="col-1" id='languageTitle' style={{width: '10vmax', borderRight: 'solid 1px #DA0037' }}>
            <span class="langTitle"
                  style={{
                    marginTop: '10.5em',
                    fontFamily: 'anton',
                    letterSpacing: 6,
                  }}>
              <h2>Frameworks</h2>
            </span>
          </div>
          
          {/* C O N T E N T */}
          <div class="col flex-shrink-1"
            style={{
              fontFamily: 'roboto',
              fontWeight: '300',
              fontSize: '1.65vmax',
              paddingLeft: '2em',
              paddingTop: '1em'
            }}>
            <h3>React</h3>
            <p>Components - Libraries - Virtual Dom</p>
            <h3>Node Js</h3>
            <p>cross-platform runtime environment</p>
            <h3>Bootstrap</h3>
            <p>css framework - ready components</p>
          </div>

        </div>
      </div>

      {/* D A T A B A S E */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <div class="row d-flex justify-content-around mt-4" style={{ marginBottom: '5em', }} id="database">
          
          {/* R O T A T E  T I T L E */}
          <div class="col-1" id='languageTitle' style={{width: '10vmax', borderRight: 'solid 1px #DA0037' }}>
            <span class="langTitle"
                  style={{
                    marginTop: '10.5em',
                    fontFamily: 'anton',
                    letterSpacing: 6,
                  }}>
              <h2 style={{ paddingLeft: '1em' }}>DataBase</h2>
            </span>
          </div>
          
          {/* C O N T E N T */}
          <div class="col flex-shrink-1"
            id='datacontent'
            style={{
              fontFamily: 'roboto',
              fontWeight: '300',
              fontSize: '1.65vmax',
              paddingLeft: '2em',
              paddingTop: '1em'
            }}>
            <h3>My SQL</h3>
            <p>Structured Query Language - relational database</p>
            <h3>Mongo DB</h3>
            <p>NoSQL database management program <br/> Document-oriented information</p>
            
          </div>

          {/* I C O N S */}
          <div class="col-xl-6 mt-5" id='iconsData'>
            
            <div data-aos="fade-up" data-aos-duration="1000">
              <div class="row justify-content-center align-items-center mt-5">
                <div class="col-3 ms-1 me-1">
                  <img id='icon' src={mysql} alt="" style={{ height: '9vmax', }}/>
                </div>                
                <div class="col-3 ms-1 me-3">
                  <img id='icon' src={mongoDB} alt="" style={{ height: '8vmax', }}/>
                </div>                
              </div>
            </div>
          
          </div>

        </div>
      </div>

      {/* T O O L S */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <div class="row d-flex justify-content-around mt-4" style={{ marginBottom: '5em', }}>

          {/* I C O N S */}
          <div class="col-xl-6 mt-5" id='iconsFrameworks'>
            
            <div data-aos="fade-up" data-aos-duration="1000">
              <div class="row justify-content-center align-items-center mt-5">
                <div class="col-3 ms-1 me-1">
                  <img id='icon' src={git} alt="" style={{ height: '6vmax', }}/>
                </div>                
                <div class="col-3 ms-1 me-3">
                  <img id='icon' src={npm} alt="" style={{ height: '8vmax', }}/>
                </div>                
                <div class="col-3 ms-1 me-1">
                  <img id='icon' src={vscode} alt="" style={{ height: '6vmax', }}/>
                </div>
              </div>
            </div>
          
          </div>

          {/* R O T A T E  T I T L E */}
          <div class="col-1" id='languageTitle' style={{width: '10vmax', borderRight: 'solid 1px #DA0037' }}>
            <span class="langTitle"
                  style={{
                    marginTop: '8em',
                    fontFamily: 'anton',
                    letterSpacing: 10,
                  }}>
              <h2>Tools</h2>
            </span>
          </div>
          
          {/* C O N T E N T */}
          <div class="col flex-shrink-1"
            style={{
              fontFamily: 'roboto',
              fontWeight: '300',
              fontSize: '1.65vmax',
              paddingLeft: '2em',
              paddingTop: '1em'
            }}>
            <h3>Git</h3>
            <p>Version control - Github - Git Bash</p>
            <h3>Npm</h3>
            <p>package management system</p>
            <h3>VSCode</h3>
            <p>Integrated Git control - Plugins</p>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Skills