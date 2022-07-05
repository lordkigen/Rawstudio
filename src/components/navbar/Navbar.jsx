import React, { useState} from 'react'
import './navbar.css'
import { logo, Menu, Close } from '../../assets/export'

const  Navmenu = () => (
    <>
    <li><a href="#hero">Marketplace</a></li>
    <li><a href="#hero">Discover</a></li>
    <li><a href="#hero">Resources</a></li>
    </>
)

function Navbar() {
const [Toggle, setToggle]  = useState(false)

  return (
    <div className='n__container'>
           <div className="n__container-logo">
                <img src={logo} alt="logo" />
                <span>Rawstudio</span>
           </div>
            
            
            <ul className="n__container-nav">
               <Navmenu/>
            </ul>

            <div className="n__container-account">
                <li>Register</li>
                    <span ></span>
                <li>Login</li>
            </div>

            {Toggle ?  <li onClick={() => setToggle(false)} className="closemenu"><img src={Close}  alt="closeicon"/></li> : <li onClick={ () => setToggle(true)} className="openmenu"><img src={Menu}  alt="openicon"/></li> }

            {Toggle && (
               <div className="n__container-nav__mobile  slide-top">
                  <Navmenu/>

                  <div className="n__container-account__mobile">
                    <li>Register</li>
                    <li>Login</li>
                    </div>
               </div>
            )}
    </div>
  )
}

export default Navbar