import React from 'react'
import './features.css'
import { monkeyImg, foxImg, profileImg1, profileImg2} from '../../assets/export'

function Features() {
  return (
    <div className='f__container'>
         <div className="feature__container content-one">
              <div className="img__container">
                  <img src={monkeyImg} alt="monkeyimage" />
              </div>

              <div className="feature__container-content">
                  <span>Liquid Abstract Soft</span>
                      <div className="content-inner__container">
                             <div className="flex-one__container">
                                  <div className="content-profile__container">
                                    <img src={profileImg2} alt="profile" />
                                      <small>@ryzan</small>
                                  </div>
                                  <span>Current Bid</span>
                                  <span>0.85ETH</span>
                             </div>

                             <div className="flex-two__container">
                                        <div className="time__container">
                                           <span>Ending in</span>
                                           <span>4h 26min 16s</span>
                                        </div>
                                        <button className='btn2'>Place bid</button> 
                             </div>
                      </div>
              </div>
         </div>

         <h2>Featured <br /><span>Artwork</span><br />Collection</h2>
        

        
         <div className="feature__container content-two">
           <div className="img__container">
                  <img src={foxImg} alt="monkeyimage" />
              </div>
              <div className="feature__container-content">
                  <span>Liquid Abstract Soft</span>
                      <div className="content-inner__container">
                             <div className="flex-one__container">
                                  <div className="content-profile__container">
                                    <img src={profileImg1} alt="profile" />
                                      <small>@ryzan</small>
                                  </div>
                                  <span>Current Bid</span>
                                  <span>0.85ETH</span>
                             </div>

                             <div className="flex-two__container">
                                        <div className="time__container">
                                           <span>Ending in</span>
                                           <span>4h 26min 16s</span>
                                        </div>
                                        <button className='btn2'>Place bid</button> 
                             </div>
                      </div>
                </div>
            </div>
            
            <div className="content__below">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam at mauris blandit pellentesque nisl. Gravida.</p>

                     <button className='btn feature__btn'>Explore</button>
              </div>
        </div>
  )
}

export default Features