import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import { BiChevronRight } from 'react-icons/bi'

function Footer() {
  return (
    <div className='footer__container'>
         <div className="footer__top-container">
             <div className="footer__top-header">
                 <span>Ready to get started?</span>
                 <button>Get started</button>
             </div>
         </div>

         <div className="footer__middle-container">
             <div className="footer__newsletter">
                <span>subscribe to our news letter</span>
                    <div className="input__container">
                        <input type="text"  placeholder= "Email address"/>
                        <button><BiChevronRight className='input-icon'/></button>
                    </div>
             </div>

             <div className="footer__middle-link">
                  <div className="services__links-container">
                        <span>Services</span>
                        <small>Email Marketing</small>
                        <small>Campaigns</small>
                        <small>Branding</small>
                        <small>Offline</small>
                  </div>

                  <div className="services__links-container">
                        <span>About</span>
                        <small>Our story </small>
                        <small>Benefits</small>
                        <small>Team</small>
                        <small>Careers</small>
                  </div>

                    <div className="services__links-container">
                        <span>Help</span>
                        <small>Faqs</small>
                        <small>Contact us</small>
                    </div>
            </div>
        </div>

          <div className="footer__conditions-social">
                <div className="footer__conditions">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>

                <div className="footer__socials-container">
                    <FaFacebookF className='footer__icon'/>
                    <FaTwitter className='footer__icon'/>
                    <FaInstagram className='footer__icon'/>
                </div>

          </div>

             <div className="footer__allrights">
                 <span>&copy; Lordkigen all rights Reserved..</span>
             </div>
    </div>
  )
}

export default Footer