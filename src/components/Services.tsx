import React from 'react'
import '../css/Services.css'
import CMsvg from '../assets/background/ServicesCM.svg'
import MCsvg from '../assets/background/ServicesMC.svg'
import LeftLogo from '../assets/Services/LeftLogo.svg'
import RightLogo from '../assets/Services/RightLogo.svg'
import Left1 from '../assets/Services/Left1.svg'
import Left2 from '../assets/Services/Left2.svg'
import Left3 from '../assets/Services/Left3.svg'
import Left4 from '../assets/Services/Left4.svg'
import Right1 from '../assets/Services/Right1.svg'
import Right2 from '../assets/Services/Right2.svg'
import Right3 from '../assets/Services/Right3.svg'
import Right4 from '../assets/Services/Right4.svg'

export const Services = () => {
  return (
    <div className='Services'>
      <div className="ServicesCard MarMarketingCampaigns">
      <div className="ServicesLogo"><img src={LeftLogo} alt="SVG as an image"></img></div>
      <div className="ServicesTittle">Marketing Campaigns</div>
      <div className="ServicesInfo">We connect you with niche Discord servers for hosting AMA's, events, and promoting your business to new audiences.</div>
      <div className="ServicesInclude">INCLUDES</div>
      <div className="ServicesMiniCards">

      <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">AMAs</div>
            <div className="MiniCardTitle"><img src={Left1} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">A live hosted event to connect you with the community.</div>
        </div>
        </div>

 <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">Airdrops</div>
            <div className="MiniCardTitle"><img src={Left2} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">A giveaway to reward and encourage user activity.</div>
        </div>
        </div>

 <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">Audits</div>
            <div className="MiniCardTitle"><img src={Left3} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">Builds confidence in the long-term goals of your project.</div>
        </div>
        </div>
        
 <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">Social Media</div>
            <div className="MiniCardTitle"><img src={Left4} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">Boost your online presence with our social media marketing.</div>
        </div>
        </div>
      </div>
      </div>




      <div className="ServicesCard CommunityManagement">
      <div className="ServicesLogo"><img src={RightLogo} alt="SVG as an image"></img></div>
      <div className="ServicesTittle">Marketing Campaigns</div>
      <div className="ServicesInfo">We connect you with niche Discord servers for hosting AMA's, events, and promoting your business to new audiences.</div>
      <div className="ServicesInclude">INCLUDES</div>
      <div className="ServicesMiniCards">

      <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">Moderation</div>
            <div className="MiniCardTitle"><img src={Right1} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">Expert Discord staff for a safe and positive community.</div>
        </div>
        </div>

 <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">Social Media Research</div>
            <div className="MiniCardTitle"><img src={Right2} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">Analytics and stats to help direct the growth of your business.</div>
        </div>
        </div>

 <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">Crypto Integrations</div>
            <div className="MiniCardTitle"><img src={Right3} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">Integrate crypto - currency tokens to your discord servers.</div>
        </div>
        </div>
        
 <div className="MiniCard">
          <div className="MinicardContent">
            <div className="MiniCardTop">
            <div className="MiniCardTitle">AMAs</div>
            <div className="MiniCardTitle"><img src={Right4} alt="SVG as an image"></img></div>
          </div>
          <div className="MiniCardInfo">Create automated and curated bots according to your needs.</div>
        </div>
        </div>



      </div>
      </div>
    </div>
  )
}
