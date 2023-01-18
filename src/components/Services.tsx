import React from 'react'
import '../css/Services.css'
import CMsvg from '../assets/background/ServicesCM.svg'
import MCsvg from '../assets/background/ServicesMC.svg'

export const Services = () => {
  return (
    <div className='Services'>
      <div className="ServicesCard MarMarketingCampaigns">
      {/* <div className='CMsvg'><img src={CMsvg} alt="SVG as an image"></img></div>  */}
      <div className="ServicesLogo">Logo</div>
      <div className="ServicesTittle">Marketing Campaigns</div>
      <div className="ServicesInfo">We connect you with niche Discord servers for hosting AMA's, events, and promoting your business to new audiences.</div>
      <div className="ServicesInclude">INCLUDES</div>
      <div className="ServicesMiniCards">
        <div className="MiniCard">
          <div className="MiniCardTop">
            <div className="MiniCardTitle">AMAs</div>
            <div className="MiniCardLogo">logo</div>
          </div>
          <div className="MiniCardInfo">A live hosted event to connect you with the community.</div>
        </div>
      </div>
      </div>



      <div className="ServicesCard CommunityManagement">
        {/* <div className='MCsvg'><img src={MCsvg} alt="SVG as an image"></img></div> */}
      <div className="ServicesLogo">Logo</div>
      <div className="ServicesTittle">Marketing Campaigns</div>
      <div className="ServicesInfo">We connect you with niche Discord servers for hosting AMA's, events, and promoting your business to new audiences.</div>
      <div className="ServicesInclude">INCLUDES</div>
      <div className="ServicesMiniCards">
        <div className="MiniCard">
          <div className="MiniCardTop">
            <div className="MiniCardTitle">AMAs</div>
            <div className="MiniCardLogo">logo</div>
          </div>
          <div className="MiniCardInfo">A live hosted event to connect you with the community.</div>
        </div>
      </div>
      </div>
    </div>
  )
}
