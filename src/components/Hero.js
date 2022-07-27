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
        color: '#ededed',
        }}>
      
      <div class="row justify-content-center align-items-center" style={{ marginBottom: '-2vmin' }} >
        <div class="col-7">
          <div
            class="heroPronoun"
            style={{
              fontFamily: 'yellowtail',
              fontWeight: '400',
              paddingInline: '2vmin'
              }}>
              <h1>I'm</h1> 
          </div>
        </div>
      </div>

      <div class="row justify-content-center align-items-center">
        <div class="col-7" >
          <h1 
            class="heroName"
            style={{ 
              fontFamily: 'anton',
              fontWeight: '400',
              textAlign: 'left',
              margin: 0,
              padding: 0,
              }}>
              <h1>TITODEV</h1>
          </h1>
        </div>
      </div>
            
      <div class="row justify-content-center align-items-center">
        <div class="col-7">
          <div
            class="heroTyped"
            style={{
              color: '#a0a0a0',
              fontSize: '5.5vmin',
              fontFamily: 'roboto',
              fontWeight: '300',
              paddingInline: '2vmin'
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