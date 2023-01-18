import React from 'react'
import '../css/Partners.css'
import bas from '../assets/partners/bas.svg'
import bist from '../assets/partners/bist.svg'
import cudos from '../assets/partners/cudos.svg'
import maha from '../assets/partners/maha.svg'

export const Partners = () => {
  return (
    <div className='Partners'>
      <img src={bas} alt="SVG as an image"></img>
      <img src={maha} alt="SVG as an image"></img>
      <img src={cudos} alt="SVG as an image"></img>
      <img src={bist} alt="SVG as an image"></img>
    </div>
  )
}
