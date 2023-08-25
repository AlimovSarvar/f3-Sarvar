import React from 'react'
import './Features.scss'
import image1 from '../../assets/img/img1.png'

function Features() {
  return (
    <div className='container'>

      <p className='p_1'><b className='b1'>Our</b><i>.</i>Features</p>
      <p className="p_2">This very extraordinary feature, can make learning activities more efficient</p>

      <div className="last1_box">
        <img className='image1' src={image1} alt="" />
        <div className="last1_in_text_box">
          <div className="text_big">A <b className='b2'>user interface</b> designed for the classroom</div>
          <div className="min_box">
            <img className='min_img' src="" alt="" />
            <div className="min_text">Teachers don’t get lost in the grid view and have a dedicated Podium space.</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features
