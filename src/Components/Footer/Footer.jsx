import React from 'react'
import './Footer.css'
import copyright from '../../assets/copyright.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h3>Olusegun Aromofisomo</h3>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> <img src={copyright} height={16} width={16} />  2024 Olusegun Aromofisomo. All rights reserved.</p>
            {/* <div className="footer-bottom-right">
                <p>Connect with me </p>
            </div> */}
        </div>
    </div>
  )
}

export default Footer
