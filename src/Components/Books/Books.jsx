import React from 'react'
import './Books.css'
import Diminishing_corruption from '../../assets/Diminishing_corruption.jpg'
import Safest_option from '../../assets/Safest_option.jpg'
import Essential_security from '../../assets/Essential_security.jpg'
import Anti_corruption from '../../assets/Anti_corruption.jpg'
import Girlchild_poster from '../../assets/Girlchild_poster.jpg'
import Child_birthctr from '../../assets/Child_birthctr.jpg'
import Antisuicide_Ad from '../../assets/Antisuicide_Ad.jpg'

const Books = () => {
  return (
    <div id='book' className='Book'>
        <div className="books">
            <h1>BOOKS AND POSTERS</h1>
            <p>I have written three (3) books to help promote the awareness of HIV, security awareness and Diminishing corruption. I have also printed and shared posters to advice teenagers and youths against corruption, vandalism and suicide. In addition, I have promoted girl child education and child birth control with posters by sharing them in various parts of the country.</p>
        </div>
        <div className='row'>
            <div className='column'>
            <img src={Safest_option} height={400} width={350} />
            <h2>Teens' Safest Options Against HIV Infection</h2>
            </div>
            <div className='column'>
            <img src={Diminishing_corruption} height={400} width={350} />
            <h2>Diminishing Corruption in Nigeria</h2>
            </div>
            <div className='column'>
            <img src={Essential_security} height={400} width={350} />
            <h2>Essential Security Education</h2>
            </div>
            
        </div>

        <div className='row2'>
        <div className='column'>
            <img src={Child_birthctr} height={400} width={420} />
            <h2>Child Birth Control Poster</h2>
            </div>
            <div className='column'>
            <img src={Anti_corruption} height={400} width={420} />
            <h2>Anti-corruption Advocacy Poster</h2>
            </div>
            <div className='column'>
            <img src={Girlchild_poster} height={400} width={420} />
            <h2>Girl Child Advocacy Poster</h2>
            </div>
            <div className='column'>
            <img src={Antisuicide_Ad} height={400} width={420} />
            <h2>Advocacy Against Suicide Poster</h2>
            </div>
        </div>
    </div> 

  )
}

export default Books