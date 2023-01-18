import React from 'react'
import '../css/AffiliateProgramme.css'
import Bolt from '../assets/affiliate/Bolt.svg'

export const AffiliateProgramme = () => {
  return (
    <div className='AffiliateProgramme'>
         <h1>GMTA Affiliate Programme</h1>   

        <div className="AffiliateInfo">
          <h3>Interested in partnering with us to boost your crypto community on Discord?</h3>
          <a href="">Become an Affiliate <img src={Bolt} alt="SVG as an image"></img></a>
        </div>
    </div>
  )
}


