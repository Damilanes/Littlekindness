import React from 'react'
import './Contact.css'
import envelope from '../../assets/envelope.svg'
import Phone_solid from '../../assets/Phone_solid.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gsi3wxp', 'template_1xtlujj', form.current, {publicKey: 'YOUR_PUBLIC_KEY',})
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
    

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                {/* <h1>Let's talk</h1> */}
                <div className='left-para'>
                <p>I am available to give speeches, grant consultations on health, HIV/AIDS, Girl child education and other Moral Education.</p>   
                </div>
                
                {/* <div className="contact-details"> */}
                    {/* <div className="contact-detail">
                    <img src={Phone_solid} height={20} width={20} /> <p>08055312880</p>
                    </div> 

                    {/* <div className="contact-detail">
                        {/* <article className="contact_option">
                            <h5>tensteensolu@gmail.com</h5>
                            <a href="tensteensolu@gmail.com">Send a message</a>
                        </article> */}
                    {/* { <img src={envelope} height={20} width={20} /> <p>tensteensolu@gmail.com</p>  */}

                    {/* </div> */}
                {/* <div className="contact-detail"> */}
                 
                {/* </div>  */}
                <div className="contact_container">
                    <div className="contact_options">
                    <article className="contact_option">
                        <img src={envelope} height={30} width={30} />
                        <h4>Email</h4>
                        <h5>tensteensolu@gmail.com</h5>
                        <a href="mailto:tensteensolu@gmail.com"><button type='send message' className='bttn'>Send a message</button></a> 
                    </article>
                    <article className="contact_option">
                        <img src={Phone_solid} height={30} width={30} /> 
                        <h4>Mobile No.</h4>
                        <h5>08055312880</h5>
                        <a href="tel:+2348055312880"><button type='call' className='bttn'>call</button></a> 
                    </article>
                    </div>
                </div>
            </div>
            {/* <form className="contact-right"> */}
                {/* <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form> */}
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact

