import React from 'react'
import './artistcontainer.css'
import { BsPatchCheck } from 'react-icons/bs'


function Artsistcontainer(props) {
const {profilePic, fullname, username, coverPhoto} = props

  return (
    <div className='Ac__container'>
            <div className="profile__container">
                 <div className="userprofile__container">
                      <div className="userprofile__container-inner">
                          <img src={profilePic}  alt="img" />
                              <div className='userprofile__inner-container'>
                                <span>{fullname} <BsPatchCheck className='badgeicon'/></span>
                                <small>{username}</small>
                              </div>
                      </div>
                      <button className='btnA'>Follow</button>
                 </div>

                 <div className="profile__container-cover">
                      <img src={coverPhoto} alt="img" />
                 </div>
            </div>
    </div>
  )
}

export default Artsistcontainer