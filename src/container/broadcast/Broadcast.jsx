import React from 'react'
import './broadcast.css'
import { HiPhotograph } from 'react-icons/hi'
import { TiCloudStorage } from 'react-icons/ti'
import { FaSalesforce } from 'react-icons/fa'
import { GiWallet } from 'react-icons/gi'

function Broadcast() {
  return (
    <div className='b__container'>
         <div className="b__container-title">
               <h2>Create and Sell your NFTs</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Cras diam at mauris blandit pellentesque nisl. Gravida.</p>
         </div>

         <div className="b__container-inner__container">
             <div className="inner__container-content  broadcast1">
                    <div className="icon-container">
                        <HiPhotograph className='broadcast-icon icon__one'/>
                    </div>
                    <span>View NFTs</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam at mauris .</span>
             </div>

             <div className="inner__container-content broadcast2">
                    <div className="icon-container">
                        <TiCloudStorage className='broadcast-icon icon__one'/>
                    </div>
                    <span>Store NFTs</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam at mauris.</span>
             </div>

             <div className="inner__container-content broadcast3">
                    <div className="icon-container">
                        <FaSalesforce className='broadcast-icon icon__one'/>
                    </div>
                    <span>Sale NFTs</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam at mauri.</span>
             </div>

             <div className="inner__container-content broadcast4">
                    <div className="icon-container">
                        <GiWallet  className='broadcast-icon icon__one'/>
                    </div>
                    <span>Exchange NFTs</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam at mauris.</span>
             </div>

           
         </div>
    </div>
  )
}

export default Broadcast