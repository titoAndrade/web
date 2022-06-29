import github from './icons/icons8-github-100.png'
import linkedin from './icons/icons8-linkedin-100.png'
import twitter from './icons/icons8-twitter-squared-100.png'
import instagram from './icons/icons8-instagram-100.png'
import whatsapp from './icons/icons8-whatsapp-100.png'
import copyright from './icons/copyright.png'

const Footer = () => {
  return (
    <div class="container" style={{ height: '15%', background: '#EDEDED', color: '#171717', borderTop: 'solid 3px #DA0037'}} id='social'>
      <div class="row justify-content-left"
           style={{
            marginLeft: '1em',
            marginTop: '1em'
           }}>
 
        {/* GITHUB */}
        <div class="col-1">
          <a href="https://github.com/titoAndrade" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={github} alt="" style={{ height: '1.5rem'}} title="github"/>
            </button>
          </a>
        </div>

        {/* LINKEDIN */}
        <div class="col-1">
          <a href="https://www.linkedin.com/in/titoandrade-dev" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={linkedin} alt="" style={{ height: '1.5rem'}} title="linkedIn"/>
            </button>
          </a>
        </div>

        {/* TWITTER */}
        <div class="col-1">
          <a href="https://twitter.com/twttitto" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={twitter} alt="" style={{ height: '1.5rem'}} title="twitter"/>
            </button>
          </a>
        </div>

        {/* INSTAGRAM */}
        <div class="col-1">
          <a href="https://www.instagram.com/titoraulandrade/" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={instagram} alt="" style={{ height: '1.5rem'}} title="instagram"/>
            </button>
          </a>
        </div>

        {/* WHATSAPP */}
        <div class="col-1">
          <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={whatsapp} alt="" style={{ height: '1.45rem'}} title="whatsApp"/>
            </button>
          </a>
        </div>

        {/* COPYRIGHT */}
        <div class="col-lg-7 col-sm-8 mt-1" id='copyright'>
           <p style={{
                textAlign:'right',
                padding: '0.3em',
                marginRight:'3em',
                fontFamily: 'roboto',
                fontWeight: '300',
                fontSize: '0.8em',
           }}>Built from scratch by me &nbsp; 
           <img src={copyright} alt="" 
                style={{ 
                  height: '15px',
                  
                }}/>&nbsp; Tito Andrade - 2022</p>
           
        </div>   

      </div>
    </div>
  )
}

export default Footer