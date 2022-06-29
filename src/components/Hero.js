import { useTypewriter, Cursor } from 'react-simple-typewriter'
import '../scss/custom.css'

const Hero = () => {

  const {text} = useTypewriter({
    words: ['Web Developer Jr', 'Frontend', 'Self-taught', 'Resourceful', 'Team player', 'Empathic', 'Communicative', 'Open Minded', 'Creative'],
    loop: 0,
    typeSpeed: 130,
    deleteSpeed: 70,
    delaySpeed: 2000,
  })

  return (
    <div>
      <div class='container ms-5 ps-5'
        id='hero'
        style={{
        margin: 0,
        marginTop: -130,
        padding: 0,
        background: 'transparent',
        display: 'grid',
        placeContent: 'center',
        height: '108vh',
        }}>
      
        <div class='row ms-4'>
          <h1 style={{
            textAlign: 'left',
            fontSize: '120px',
            margin: '0 0 16px',
            color: '#ededed'
            }}>

            <span
              class="heroPronoun"
              style={{
                color: '#ededed',
                display: 'inline-block',
                position: 'relative',
                fontFamily: 'yellowtail',
                fontSize: '90px',
                fontWeight: '400',
            }}>
              I'm
            </span>

            <div class="col-12">
              <span 
                class="heroName"
                style={{
                  display: 'flex',
                  position: 'relative',
                  fontFamily: 'anton',
                  fontWeight: '400'
                }}>
                Tito Andrade
              </span>
            </div>

            <span
              class="heroTyped"
              style={{
                color: '#a0a0a0',
                display: 'block',
                fontSize: '40px',
                position: 'absolute',
                fontFamily: 'roboto',
                fontWeight: '300',
              }}>
                {text}
              <Cursor/>
            </span>

          </h1>
        </div>

      </div>

     </div>
      
  )
}

export default Hero