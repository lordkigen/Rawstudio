import React from 'react'
import Artsistcontainer from '../../components/artistContainer/Artsistcontainer'
import './artist.css'
import { artistImg1, artistImg2, artistImg3, artistImg4, camelImg, cartoon, jackelImg, boyImg} from '../../assets/export'

function Artists() {
  return (
    <div className='A__container'>
        <h2>Top Artist Of The Week</h2>

         <div className="cards__container">
            <Artsistcontainer profilePic={artistImg1} fullname="Jennny Wilson" username="@jenny12"  coverPhoto={camelImg}/>
            <Artsistcontainer profilePic={artistImg2} fullname="William Pack" username="@william23"  coverPhoto={boyImg}/>
            <Artsistcontainer profilePic={artistImg3} fullname="Mark Cannon" username="@cannon3"  coverPhoto={jackelImg}/>
            <Artsistcontainer profilePic={artistImg4} fullname="Isabela Monroe" username="@Monroeisla"  coverPhoto={cartoon}/>
         </div>
    </div>
  )
}

export default Artists