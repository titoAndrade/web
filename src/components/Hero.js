import { useTypewriter, Cursor } from 'react-simple-typewriter'
import '../App.css'

const Hero = () => {

  const {text} = useTypewriter({
    words: 
      ['Web Developer Jr',
       'Frontend',
       'Self-taught',
       'Resourceful',
       'Team player',
       'Empathic',
       'Communicative',
       'Open Minded',
       'Creative'],
    loop: 0,
    typeSpeed: 130,
    deleteSpeed: 70,
    delaySpeed: 2000,
  })

  return (

    <div class='container-fluid'
        id='hero'
        style={{
        margin: 0,
        padding: 0,
        marginTop: '30vh',
        marginBottom: '45vh',
        background: 'transparent',
        // height: '100vmin',
        color: '#ededed',
        }}>
      
      <div class="row justify-content-center align-items-center" style={{ marginBottom: '-2vmin' }} >
        <div class="col-xl-7 col-lg-8 col-md-12 col-sm-6">
          <div
            class="heroPronoun"
            style={{
              fontFamily: 'yellowtail',
              fontSize: '13vmin',
              fontWeight: '400',
              marginLeft: '3vw'
              }}>
              I'm
          </div>
        </div>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-6" >
          <h1 
            class="heroName"
            style={{ 
              fontFamily: 'anton',
              fontWeight: '400',
              fontSize: '18.55vmin',
              textAlign: 'center',
              margin: 0,
              padding: 0,
              }}>
              Tito Andrade
          </h1>
        </div>
      </div>
            
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-7 col-lg-8 col-md-12 col-sm-6">
          <div
            class="heroTyped"
            style={{
              color: '#a0a0a0',
              fontSize: '5.5vmin',
              fontFamily: 'roboto',
              fontWeight: '300',
              marginLeft: '3vw'
               }}>
              {text}
              <Cursor/>
          </div>
        </div>
      </div>

    </div>
      
  )
}

export default Hero