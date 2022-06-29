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
         }}>

      <div class="row justify-content-center">

        <div id='boxShadows'
          class="col-lg-7 col-sm-4"
          style={{
            border: 'solid 1px #ededed',
            // borderRadius: '1em',
            // boxShadow: '5px 5px 20px #000',
            paddingTop: '2em',
            paddingBottom: '3em'      
          }}>

         {/* T I T L E */}
          <div class="row justify-content-center mb-3 me-1">
            <div class="col-lg-5 col-sm-3" id='contactTitle' style={{ fontFamily: 'anton'}}>
            <h1 class="dbTitle" style={{ fontSize: '40px', textAlign: 'center'}}>Contact me</h1>
            </div>
          </div>

          {/* F O R M */}
          <form id='allform' ref={form} onSubmit={sendEmail} class="row justify-content-center">
          
          <div class="row justify-content-center">
            <div class="col-10 mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Jane/John Doe" required={true}/>
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
              class="col-9 mt-1 btn"
              type="submit"
              value="Send"
              id="sendFormButton"
              style={{
                fontFamily: 'anton',
                fontWeight: '500',
                fontSize: '16px',
                letterSpacing: 1,
                background: '#DA0037',
                color: '#171717',
                border: 'none',
                width: '32em'
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


