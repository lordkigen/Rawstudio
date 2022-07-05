import React from 'react'
import './contact.css'
import { FiPlay } from 'react-icons/fi'
import { officeImg } from '../../assets/export'

function Contact() {
  return (
    <div className='c__container'>
        <div className="contact__image-container">
            <img src={ officeImg } alt="officeimage" />
            <div className="overBtn-container">
                <FiPlay className='overlay_icon'/>
            </div>
        </div>

        <div className="right__containerc">
            <span>Our Company</span>

            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu gravida eleifend risus pharetra auctor. Nisl morbi dui mollis lacus, eget. Morbi molestie vitae dignissim in platea tincidunt dictum enim. </span>

            <button className='btn Contactbtn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Contact