
const Loader = () => {
  return (
    <div class="container" style={{ height: '100vh' }}>
      <div class="row justify-content-center align-items-center">
        <div class="col-2"
             style={{ marginTop: '40vh' }}>
          <lottie-player 
            src="https://assets6.lottiefiles.com/packages/lf20_bxw59kpa.json"
            background="transparent"
            speed="1" 
            style={{ width: '120px', height: '120px' }}
            loop
            autoplay>
          </lottie-player>
        </div>
      </div>
    </div>
  )
} 

export default Loader