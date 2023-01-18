import React from 'react'
import '../css/Team.css'
import Chemery from '../assets/members/Chemery.svg'
import Alanox from '../assets/members/Alanox.svg'
import Mike from '../assets/members/Mike.svg'
import Twitter from '../assets/members/Twitter.svg'
import Linkedin from '../assets/members/Linkedin.svg'

export const Team = () => {
  return (
    <div className='Team'>
      <div className="TeamInfo">
        <h1>Team</h1>
        <h4>Expert crypto-community builders at your service.</h4>
      </div>

      <div className="TeamPhotos">

        <div className="TeamMember">
          <div className="TeamMemberImg"><img src={Chemery} alt="SVG as an image"></img></div>

          <div className="MemberInfo">
            <div className="MemberNameTittle"> 
            <h2>Chemery</h2>
            <h4>Co-Founder</h4>
            </div>
            <div className="MemberSocialLinks">
              <div className="SocialIcon TW"><img src={Twitter} alt="SVG as an image"></img></div>
              <div className="SocialIcon LD"><img src={Linkedin} alt="SVG as an image"></img></div>
            </div>
          </div>
        </div>

        <div className="TeamMember">
          <div className="TeamMemberImg"><img src={Alanox} alt="SVG as an image"></img></div>

          <div className="MemberInfo">
            <div className="MemberNameTittle"> 
            <h2>Alanox</h2>
            <h4>Co-Founder</h4>
            </div>
            <div className="MemberSocialLinks">
              <div className="SocialIcon TW"><img src={Twitter} alt="SVG as an image"></img></div>
              <div className="SocialIcon LD"><img src={Linkedin} alt="SVG as an image"></img></div>
            </div>
          </div>
        </div>
        <div className="TeamMember">
          <div className="TeamMemberImg"><img src={Mike} alt="SVG as an image"></img></div>

          <div className="MemberInfo">
            <div className="MemberNameTittle"> 
            <h2>Mike</h2>
            <h4>Developer</h4>
            </div>
            <div className="MemberSocialLinks">
              <div className="SocialIcon TW"><img src={Twitter} alt="SVG as an image"></img></div>
              <div className="SocialIcon LD"><img src={Linkedin} alt="SVG as an image"></img></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
