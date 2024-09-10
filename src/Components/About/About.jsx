import React from 'react'
import './About.css'
import Director from '../../assets/Director.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={mypicsz} alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
            <img src={Director} height={390} width={370} /> 
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate individual who engages in multidimensional advocacy activities on social issues of national concern.<br/> I am a certified member of the Institute For Humanitarian Studies & Social Development, Nigeria. My non-profit oriented services started in 2009 with HIV prevention intervention education in collaboration with Lagos State AIDS Control Agency as a member of the Implementing committee and as well as the Youth Work Group of the same Agency.<br/>In 2009, I found an NGO named Ten Teens Care Services, now known as Little Kindness Social Enterprise. <br/> I commenced my grassroot sensitization project in 2009 with campaign for HIV prevention and seminars focusing strictly on teenagers in junior colleges and pupils in primary four to six. During the HIV Prevention Awareness Campaign, I covered sixty-five(65) schools with over 20,000 pupils and students participating in the various talkshops across eleven(11) Local Government/Local Council Development Areas of Lagos State. I was able to sensitize about 5,000 students via seminars during my advocacy against vandalization of properties and infrastructures. I also embarked on a malaria reduction project by fumigating some communities. I'm the writer and author of the following books: Teens Safest Options Against HIV, Essential Security Education, Diminishing Corruption in Nigeria.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
