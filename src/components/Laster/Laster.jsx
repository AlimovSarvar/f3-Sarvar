import React from 'react'
import leftLaster from '../../assets/img/left-laster.png'
import { Link } from 'react-router-dom'
import './Laster.scss'

function Laster() {
  return (
    <div className='laster'>
          <h4 className='laster__tittle'>Lastest News and Resources</h4>
          <p className='totc'>See the developments that have occurred to TOTC in the world</p> 
          <div className="left__laster">
            <div>
            <img src={leftLaster} alt="" />
            </div>
            <div>
            <span>NEWS</span>
            <h5>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h5>
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <Link>Read more</Link>
            </div>
            </div>   
    </div>
  )
}

export default Laster
