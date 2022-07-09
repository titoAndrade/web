import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactMe = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_nn3xtto', 'template_rkqppz9', form.current, 'yU_ce4p04RlrLWunW')
      .then((result) => {
          alert('Message sent succesfully')
      }, (error) => {
          alert(error.message)
      })
      e.target.reset()
  }

  return (

    <div class="container" id='contact'
         style={{
          height: '100vh',
          color: '#EDEDED',
          fontFamily: 'roboto',
          fontWeight: '500',
          fontSize: '15px',
          marginTop: '8em'
         }}>

      <div class="row justify-content-center">

        <div id='boxShadows'
          class="col-xl-7 col-lg-7 col-md-10 col-sm-12"
          style={{
            border: 'solid 1px #ededed',
            paddingTop: '2em',
            paddingBottom: '3em'      
          }}>

         {/* T I T L E */}
          <div class="row justify-content-center mb-3 me-1">
            <div class="col-xl-4 col-lg-4 col-md-6 " id='contactTitle' style={{ fontFamily: 'anton'}}>
            <h1 class="dbTitle" style={{ fontSize: '2.5em', textAlign: 'center'}}>Contact me</h1>
            </div>
          </div>

          {/* F O R M */}
          <form id='allform' ref={form} onSubmit={sendEmail} class="row justify-content-center">
          
          <div class="row justify-content-center">
            <div class="col-10 mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Your name" required={true}/>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-10 mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required={true}/>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-10 mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                name="message"
                rows="5" 
                placeholder="Write something..."
                required={true}
                style={{ resize: 'none' }}>
              </textarea>
            </div>
          </div>

          {/* B U T T O N */}
          <div class="row justify-content-center">
            <button 
              class="col-3 mt-1 btn btn-primary"
              type="submit"
              value="Send"
              id="sendFormButton"
              style={{
                background: '#DA0037',
                color: '#EDEDED',
                border: 'none',
                width: '37.5vw'
              }}>
              Send
            </button>
          </div>
          
          </form>

        </div>
      
      </div>

    </div>
  )
}

export default ContactMe


