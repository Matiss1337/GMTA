import React from 'react'
import '../css/ContactForm.css'
import ContactBackground from '../assets/background/ContactBackground.svg'

export const ContactForm = () => {
  return (
    <div className='ContactForm'>
      <div className="ContactZone">
      <div className="ContactTittle">
        <h1>GetStarted</h1>
        <h4>Connect with our team and start growing your crypto community today.</h4>
      </div>

    <div className="ContactInputs">
      <div className="ContactName ContactInput">
        <h2>Name</h2>
        <input type="text" placeholder='Enter Name ' />
      </div>
          <div className="ContactEmail ContactInput">
        <h2>Email</h2>
        <input type="email" placeholder='Enter Email ' />
      </div>
    </div>

    <div className="ContactButton">
      <button>Connect</button>
    </div>

</div>

    </div>
  )
}
