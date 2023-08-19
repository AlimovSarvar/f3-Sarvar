import React from 'react'
import leftLaster from '../../assets/img/left-laster.png'
import classLaster from '../../assets/img/class-laster.png'
import zoomLaster from '../../assets/img/zoom-laster.png'
import formerLaster from '../../assets/img/former-laster.png'
import './Laster.scss'

function Laster() {
  return (
    <div className='laster container'>
          <h4 className='laster__tittle'>Lastest News and Resources</h4>
          <p className='totc'>See the developments that have occurred to TOTC in the world</p> 
        <div className="inner">
        <div className="left__laster">            
            <div>
            <img src={leftLaster} alt="img" /> 
              </div>          
            <div>
            <span className='news'>NEWS</span>
            <h5 className='info'>Class adds $30 million to its balance sheet for <br /> a Zoom-friendly edtech solution</h5>
            <p className='laster__P'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <span className='link'>
              <a className='laster__link' href="#/">Read more</a>
            </span> 
              </div>          
            </div>
            <div className="right__laster">
                 <ul className='laster__list'>
                  <li className='laster__item'>
                    <img className='first__img' src={classLaster} alt="img" />
                    <h5 className='first__tittle'>Class Technologies Inc. Closes $30 Million <br /> Series A Financing to Meet High Demand</h5>
                    <p className='first__info'>Class Technologies Inc., the company that <br /> created Class,...</p>
                  </li>
                  <li className='laster__item'>
                    <img className='first__img' src={zoomLaster} alt="img" />
                    <h5 className='first__tittle'>Class Technologies Inc. Closes $30 Million <br /> Series A Financing to Meet High Demand</h5>
                    <p className='first__info'>Class Technologies Inc., the company that <br /> created Class,...</p>
                  </li>
                  <li className='laster__item'>
                    <img className='first__img' src={formerLaster} alt="img" />
                    <h5 className='first__tittle'>Class Technologies Inc. Closes $30 Million <br /> Series A Financing to Meet High Demand</h5>
                    <p className='first__info'>Class Technologies Inc., the company that <br /> created Class,....</p>
                  </li>
                    
                 </ul>
            </div>   
        </div>
    </div>
  )
}

export default Laster
