import React from 'react'
import '../css/Nav.css'

export const Nav = () => {
  return (
    <div className='Nav'>
        <div className="LogoLinks">
            <a className='Logo' href="javascript:void(0)">LOGO</a>
            <a className='ServicesLink' href="javascript:void(0)">Services</a>
            <a className='TeamLink' href="javascript:void(0)">Team</a>
        </div>
        <div>
            <button className="GetStartedButton">Get Started</button>
        </div>
    </div>
  )
}
