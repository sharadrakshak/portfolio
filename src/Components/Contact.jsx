import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <h1 className='contact_title'>CONTACT</h1>
      <form action="">
        <input type="text" id='name' name='name' placeholder='Name' required/>
        <input type="email" id='email' name='email' placeholder='Email' required/>   
        <textarea name="message" id="message" placeholder='Message' required></textarea>
        <button className="Resume">Submit</button>
      </form>
    </div>
  )
}
