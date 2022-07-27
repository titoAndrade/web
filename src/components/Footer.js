import github from './icons/icons8-github-100.png'
import linkedin from './icons/icons8-linkedin-100.png'
import twitter from './icons/icons8-twitter-squared-100.png'
import instagram from './icons/icons8-instagram-100.png'
import whatsapp from './icons/icons8-whatsapp-100.png'
import cv from './icons/cv.png'

const Footer = () => {
  return (
    <div
      class="container"
      id='social'
      style={{
        height: '15%',
        background: '#EDEDED',
        color: '#171717',
        borderTop: 'solid 3px #DA0037',
        marginTop: '4em',
      }}>
      
      <div class="row justify-content-center mt-4 mb-3">
        
        {/* I C O N S */}
        <div class="col-xl-8 col-md-12 col-sm-12 mb-2">
          {/* GITHUB */}
          <a href="https://github.com/titoAndrade" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={github} alt="" style={{ paddingInline:'3.2vmin', height: '1.5rem'}} title="github"/>
            </button>
          </a>
          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/in/titoandrade-dev" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={linkedin} alt="" style={{ paddingInline:'3.2vmin', height: '1.5rem'}} title="linkedIn"/>
            </button>
          </a>
          {/* TWITTER */}
          <a href="https://twitter.com/titodev_" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={twitter} alt="" style={{ paddingInline:'3.2vmin', height: '1.5rem'}} title="twitter"/>
            </button>
          </a>
          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/titoraulandrade/" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={instagram} alt="" style={{ paddingInline:'3.2vmin', height: '1.5rem'}} title="instagram"/>
            </button>
          </a>
          {/* WHATSAPP */}
          <a href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={whatsapp} alt="" style={{ paddingInline:'3.2vmin', height: '1.45rem'}} title="whatsApp"/>
            </button>
          </a>
          {/* CURRICULUM */}
          <a href="https://mnf.red/titodev" rel="noreferrer" target="_blank">
            <button style={{ background: 'none', border: 'none' }}>
              <img id='socialIcon' src={cv} alt="" style={{ paddingInline:'2.5vmin', height: '1.65rem'}} title="CV"/>
            </button>
          </a>
        </div>
        
        {/* C O P Y R I G H T */}
        <div class="col-xl-4 col-md-12 col-sm-12 mt-2" id='copyright'>
           <p style={{
                textAlign:'center',
                fontFamily: 'roboto',
                fontWeight: '300',
                fontSize: '1.8vh',
           }}>Built from scratch by me &nbsp; © &nbsp; Tito Andrade - 2022</p>
           
        </div>   

      </div>
      
    </div>
  )
}

export default Footer