import React from 'react'
import './Course.scss'
import { data } from '../../lib/Data'


function Course() {

  return (
<div className='course container'>
      <div className="course__top">
              <h2>
                    Explore Course
              </h2>
              <p>
                    Ut sed eros finibus, placerat orci id, dapibus.
              </p>
      </div>
      <div className="couse__bottom">
      <ul className='course__list'>
            {
                  data.map((item , index)=>(
          
                <li className='course__item' key={index}>
                      <p className='course__title' style={{background: item.color}}>{item.name}</p>
                      <div className='course__inner'>
                      <img src={item.img} alt="" />
                      <div>
                                <h2>
                                        Lorem ipsum dolor sit amet consectetur.
                                </h2>
                                <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis nesciunt consectetur doloribus.
                                 </p>
                         
                                <span>$ {item.space}</span>
                                <br />
                                <button>EXPLORE</button>
                      </div>
                  </div>
                </li>
          
                  ))
             }
             
      </ul>
      </div>    
</div>
  )
}

export default Course
