import React from 'react'
import '../css/Footer.css'
import Twitter from '../assets/footer/FTTwitter.svg'
import Telegram from '../assets/footer/FTTelegram.svg'
import Discord from '../assets/footer/FTDiscord.svg'
import Github from '../assets/footer/FTGithub.svg'
import Reddit from '../assets/footer/FTReddit.svg'

export const Footer = () => {
  return (
    <div className='Footer'>
    <div className="FooterLinks">

    <div className="LogoZone">
    <h1>LOGO</h1>
    <h4>3891 Ranchview Dr. Richardson, California 62639</h4>
    <h4>contact@gmta.com</h4>
    <h4>(603) 555-0123</h4>
    </div>

    <div className="ServiceZone">
      <h2>Service</h2>
      <a href="javascript:void(0)">Market Your Project</a>
      <a href="javascript:void(0)">Affiliate Programme</a>
      <a href="javascript:void(0)">Disclaimer</a>
    </div>

    <div className="SupportZone">
      <h2>Support</h2>
      <a href="javascript:void(0)">Contact</a>
    </div>
    </div>

    <div className="IconZone">
      <div className="FooterIcons">
    <a className='FooterIcon FTTwitter' href="javascript:void(0)"><img src={Twitter} alt="SVG as an image"></img></a>
    <a className='FooterIcon FTTelegram' href="javascript:void(0)"><img src={Telegram} alt="SVG as an image"></img></a>
    <a className='FooterIcon FTDiscord' href="javascript:void(0)"><img src={Discord} alt="SVG as an image"></img></a>
    <a className='FooterIcon FTGithub' href="javascript:void(0)"><img src={Github} alt="SVG as an image"></img></a>
    <a className='FooterIcon FTReddit' href="javascript:void(0)"><img src={Reddit} alt="SVG as an image"></img></a>
      </div>

    <div className="CopyRight">
    <h2>© 2023 GMTA. All rights reserved.</h2>
    <div className="IconLinks">
    <a href="javascript:void(0)">Privacy Policy</a> 
    <a href="javascript:void(0)">Terms & Service</a>
    </div>
    </div>
    </div>

    </div>
  )
}
