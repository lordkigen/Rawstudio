import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './hero.css'
import { BsArrowRight } from 'react-icons/bs' 
import { homeImg, signature, } from '../../assets/export'

function Hero() {
  return (
    <div className='h__container'>
        <Navbar/>
        <div className="h__container-inner">
            <div className="left__container">
                 <div className="left__container-intro">
                    <h2><span>Discover</span>,Collect <br />& Sell Rare <span>NFTs</span></h2>
                 </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam at mauris blandit pellentesque nisl. Gravida.</p>

                    <button className='btn herobtn btn0'> Explore <BsArrowRight className='herobtn__icon'/> </button>

                    <div className="left__container-stats">
                        <div className="stats__content">
                            <span>30K+</span>
                            <span>Artwork</span>
                        </div>

                        <div className="stats__content">
                            <span>120K+</span>
                            <span>Auction</span>
                        </div>

                        <div className="stats__content">
                            <span>12K+</span>
                            <span>Artist</span>
                        </div>
                    </div>

                    <div className="signature__container">
                        <img src={signature} alt="signature" />
                    </div>
            </div>


            <div className="right__container">
                <div className="right__container-img">
                    <img src={homeImg} alt="heroimg" />
                </div>

                <div className="right__container-buttons">
                    <button className='btn btn-1 herobtn imgbtns'>Place a bid</button>
                    <button className='btn btn-2 herobtn imgbtns'>View Network</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero