import html from './icons/cib-html5.png'
import css from './icons/cib-css3-shiled.png'
import bootstrap from './icons/cib-bootstrap.png'
import js from './icons/cib-javascript.png'
import react from './icons/cib-react.png'
import mysql from './icons/cib-mysql.png'
import mongoDB from './icons/cib-mongodb.png'
import git from './icons/cib-git.png'
import npm from './icons/cib-npm.png'
import vscode from './icons/cib-visual-studio-code.png'
import nodeJs from './icons/nodeJs.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Skills = () => {
  return (

    // G L O B A L  C O N T A I N E R
    <div class="container justify-content-center mt-5 mb-5" id='skills'>

      {/* T I T L E  T E C H N O L O G I E S */}
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="row justify-content-center mt-5">
        <div class="col-lg-3 col-sm-8" id="techTitle" style={{ fontFamily: 'anton'}}>
          <h1 class="dbTitle" style={{ fontSize: '3.5em', textIndent: 2, textAlign: 'center', marginTop: '1.5em'}}>Technologies</h1>
        </div>
      </div>

{/* L A N G U A G E S  R E S P O N S I V E */}
      <div id='responsiveShow'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          height: '60vh',
          display: 'none'
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '6em'
              }}>
          
          {/* R O T A T E  T I T L E */}
          <div class="col-1" 
            id='languageTitle'
            style={{ 
              borderRight: 'solid 1px #DA0037',
              marginLeft: '0.2em'
              }}>

            <span class="langTitle me-1"
                  style={{
                    marginTop: '14em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1>Languages</h1>
            </span>
            
          </div>

          {/* I T E M S */}
          <div class="col-6"
            id="items" 
            style={{ 
              margin: 0,
              padding: 0
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>Html5</h2>
                  <p>hypertext markup language - semantic</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh'
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>Css3</h2>
                  <p>cascade style sheets - strong knowledge</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>JavaScript</h2>
                  <p>logic - events - OOP</p>
                </div>
              </div>

            </div>

          </div>

          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center'
              }}>

            <div class="row align-items-center">
              {/* HTML */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={html} alt="" style={{ padding: '0.5em', height: '5rem'}}/>
              </div>
              {/* CSS */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={css} alt="" style={{ padding: '0.5em', height: '5.6rem' }}/>
              </div>
              {/* JAVASCRIPT */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={js} alt="" style={{ padding: '0.5em', height: '4.8rem' }}/>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* L A N G U A G E S */}
      <div id='responsiveHide'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          height: '60vh'
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '6em'
              }}>
          
          {/* R O T A T E  T I T L E */}
          <div class="col-1" 
            id='languageTitle'
            style={{ 
              borderRight: 'solid 1px #DA0037'
              }}>

            <span class="langTitle me-1"
                  style={{
                    marginTop: '14em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1>Languages</h1>
            </span>
            
          </div>

          {/* I T E M S */}
          <div class="col-6"
            id="items" 
            style={{ 
              margin: 0,
              padding: 0
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>Html5</h2>
                  <p>hypertext markup language - semantic</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh'
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>Css3</h2>
                  <p>cascade style sheets - strong knowledge</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>JavaScript</h2>
                  <p>logic - events - OOP</p>
                </div>
              </div>

            </div>

          </div>

          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center',
              }}>

            <div class="row align-items-center">
              {/* HTML */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={html} alt="" style={{ height: '5rem'}}/>
              </div>
              {/* CSS */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={css} alt="" style={{ height: '5.6rem' }}/>
              </div>
              {/* JAVASCRIPT */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={js} alt="" style={{ height: '4.8rem' }}/>
              </div>

            </div>

          </div>

        </div>

      </div>

{/* F R A M E W O R K S  R E S P O N S I V E */}
      <div id='responsiveShow'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          display: 'none',
          height: '60vh',
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '10em'
              }}>
          
          {/* R O T A T E  T I T L E */}
          <div class="col-1" 
            id='languageTitle'
            style={{ 
              marginLeft: '0.2em',
              borderRight: 'solid 1px #DA0037'
              }}>

            <span class="langTitle me-1"
                  style={{
                    marginTop: '15.5em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1>Frameworks</h1>
            </span>
            
          </div>

          {/* I T E M S */}
          <div class="col-6"
            id="items" 
            style={{ 
              margin: 0,
              padding: 0
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>React</h2>
                  <p>Components - Libraries - Virtual Dom</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh'
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>Node Js</h2>
                  <p>cross-platform runtime environment</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                   <h2>Bootstrap</h2>
                  <p>css framework - ready components</p>
                </div>
              </div>

            </div>

          </div>

          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center',
              }}>

            <div class="row align-items-center">
              {/* REACT */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={react} alt="" style={{ padding:'0.5em', height: '5rem'}}/>
              </div>
              {/* NODE JS */}
              <div class="col-lg-4 col-sm-3">
                <img id='icon' src={nodeJs} alt="" style={{ padding:'0.5em', height: '5rem' }}/>
              </div>
              {/* BOOTSTRAP */}
              <div class="col-lg-4 col-sm-3">
               <img id='icon' src={bootstrap} alt="" style={{ padding:'0.5em', height: '4.2rem' }}/>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* F R A M E W O R K S */}
      <div id='responsiveHide'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          height: '45vh'
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '4em'
              }}>
          
          
          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv2'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center',
              }}>

            <div class="row align-items-center">
              {/* REACT */}
              <div class="col-4">
                <img id='icon' src={react} alt="" style={{ height: '5rem'}}/>
              </div>
              {/* NODE JS */}
              <div class="col-4">
                <img id='icon' src={nodeJs} alt="" style={{ height: '5rem' }}/>
              </div>
              {/* BOOTSTRAP */}
              <div class="col-4">
                <img id='icon' src={bootstrap} alt="" style={{ height: '4.2rem' }}/>
              </div>

            </div>

          </div>

          {/* R O T A T E  T I T L E */}
          <div class="col-1" 
            id='framtooltitle'
            style={{ 
              borderRight: 'solid 1px #DA0037',
              marginLeft: '5em'
              }}>

            <span class="langTitle"
                  style={{
                    marginTop: '15.5em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1>Frameworks</h1>
            </span>
            
          </div>

         {/* I T E M S */}
         <div class="col-5" id="items" 
            style={{ 
              margin: 0,
              padding: 0
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col ms-3 ">
                  <h2>React</h2>
                  <p>Components - Libraries - Virtual Dom</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh'
                   }}>
                <div class="col ms-3 ">
                  <h2>Node Js</h2>
                  <p>cross-platform runtime environment</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col ms-3 ">
                  <h2>Bootstrap</h2>
                  <p>css framework - ready components</p>
                </div>
              </div>

            </div>

         </div>

        </div>

      </div>

{/* D A T A  B A S E  R E S P O N S I V E */}
      <div id='responsiveShow'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          display: 'none',
          height: '60vh'
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '10em'
              }}>
          
          {/* R O T A T E  T I T L E */}
          <div class="col-1" id='languageTitle'
            style={{
              marginLeft: '0.2em',
              borderRight: 'solid 1px #DA0037'
              }}>

            <span class="langTitle me-1"
                  style={{
                    marginTop: '13em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1 style={{ paddingLeft: '0.5em' }}>DataBase</h1>
            </span>
            
          </div>

          {/* I T E M S */}
          <div class="col-6" id="items" 
            style={{ 
              margin: 0,
              padding: 0,
              marginBottom: '-4em'
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '22vh',
                   }}>
                <div class="col ms-3 ">
                  <h2>My SQL</h2>
                  <p>Structured Query Language - relational database</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '22vh'
                   }}>
                <div class="col ms-3 ">
                  <h2>Mongo DB</h2>
                  <p>NoSQL database management program <br/> Document-oriented information</p>
                </div>
              </div>

            </div>

          </div>

          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center',
              }}>

            <div class="row align-items-center">
              {/* MY SQL */}
              <div class="col-6">
                <img id='icon' src={mysql} alt="" style={{ height: '6.5rem'}}/>
              </div>
              {/* MONGO DB */}
              <div class="col-6">
                <img id='icon' src={mongoDB} alt="" style={{ height: '5.6rem' }}/>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* D A T A  B A S E */}
      <div id='responsiveHide'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          height: '60vh'
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '10em'
              }}>
          
          {/* R O T A T E  T I T L E */}
          <div class="col-1" id='languageTitle'
            style={{ 
              borderRight: 'solid 1px #DA0037'
              }}>

            <span class="langTitle me-1"
                  style={{
                    marginTop: '13em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1>DataBase</h1>
            </span>
            
          </div>

          {/* I T E M S */}
          <div class="col-6" id="items" 
            style={{ 
              margin: 0,
              padding: 0
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '22vh',
                   }}>
                <div class="col ms-3 ">
                  <h2>My SQL</h2>
                  <p>Structured Query Language - relational database</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '22vh'
                   }}>
                <div class="col ms-3 ">
                  <h2>Mongo DB</h2>
                  <p>NoSQL database management program <br/> Document-oriented information</p>
                </div>
              </div>

            </div>

          </div>

          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center',
              }}>

            <div class="row align-items-center">
              {/* MY SQL */}
              <div class="col-6">
                <img id='icon' src={mysql} alt="" style={{ height: '6.5rem'}}/>
              </div>
              {/* MONGO DB */}
              <div class="col-6">
                <img id='icon' src={mongoDB} alt="" style={{ height: '5.6rem' }}/>
              </div>

            </div>

          </div>

        </div>

      </div>

{/* T O O L S  R E S P O N S I V E */}
      <div id='responsiveShow'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          display: 'none',
          height: '60vh',
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '10em',
              }}>
          
          {/* R O T A T E  T I T L E */}
          <div class="col-1" 
            id='languageTitle'
            style={{ 
              marginLeft: '0.2em',
              borderRight: 'solid 1px #DA0037',
              }}>

            <span class="langTitle me-1"
                  style={{
                    marginTop: '15.5em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1 style={{ paddingLeft: '2.5em' }}>Tools</h1>
            </span>
            
          </div>

          {/* I T E M S */}
          <div class="col-6"
            id="items" 
            style={{ 
              margin: 0,
              padding: 0
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>Git</h2>
                  <p>Version control - Github - Git Bash</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh'
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>Npm</h2>
                  <p>package management system</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col-12 ms-3 ">
                  <h2>VSCode</h2>
                  <p>Integrated Git control - Plugins</p>
                </div>
              </div>

            </div>

          </div>

          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center',
              }}>

            <div class="row align-items-center">
              {/* GIT */}
              <div class="col-4">
                <img id='icon' src={git} alt="" style={{ padding: '0.5em', height: '4.5rem'}}/>
              </div>
              {/* NPM */}
              <div class="col-4">
                <img id='icon' src={npm} alt="" style={{ padding: '0.5em', height: '7.5rem' }}/>
              </div>
              {/* VSCODE */}
              <div class="col-4">
                <img id='icon' src={vscode} alt="" style={{ padding: '0.5em', height: '4.2rem' }}/>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* T O O L S */}
      <div id='responsiveHide'
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container" 
        style={{
          height: '45vh',
          marginBottom: '10em'
        }}>

        <div class="row justify-content-center" 
             style={{ 
              background: 'none',
              color: '#EDEDED',
              height: '45vh',
              marginTop: '4em'
              }}>
          
          
          {/* I C O N S */}
          <div class="col-lg-5 col-sm-8" id='icondiv2'
            style={{ 
              alignSelf: 'center',
              textAlign: 'center',
              }}>

            <div class="row align-items-center">
              {/* GIT */}
              <div class="col-4">
                <img id='icon' src={git} alt="" style={{ height: '4.5rem'}}/>
              </div>
              {/* NPM */}
              <div class="col-4">
                <img id='icon' src={npm} alt="" style={{ height: '7.5rem' }}/>
              </div>
              {/* VSCODE */}
              <div class="col-4">
                <img id='icon' src={vscode} alt="" style={{ height: '4.2rem' }}/>
              </div>

            </div>

          </div>

          {/* R O T A T E  T I T L E */}
          <div class="col-1"
            id='languageTitle2'
            style={{ 
              borderRight: 'solid 1px #DA0037',
              marginLeft: '5em'
              }}>

            <span class="langTitle"
                  style={{
                    marginTop: '10em',
                    fontFamily: 'anton',
                    letterSpacing: 10
                  }}>
              <h1>Tools</h1>
            </span>
            
          </div>

         {/* I T E M S */}
         <div class="col-4" id="items"
            style={{ 
              margin: 0,
              padding: 0
              }}>
            
            <div class="container mt-2"
                 style={{
                  fontFamily: 'roboto',
                  fontWeight: '300',
                  fontSize: '1.4em'
                 }}>
              
              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col ms-3 ">
                  <h2>Git</h2>
                  <p>Version control - Github - Git Bash</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh'
                   }}>
                <div class="col ms-3 ">
                  <h2>Npm</h2>
                  <p>package management system</p>
                </div>
              </div>

              <div class="row align-items-center" 
                   style={{
                    height: '15vh',
                   }}>
                <div class="col ms-3 ">
                  <h2>VSCode</h2>
                  <p>Integrated Git control - Plugins</p>
                </div>
              </div>

            </div>

         </div>

        </div>

      </div>

    </div>
  )
}

export default Skills