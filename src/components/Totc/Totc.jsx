import React from 'react'
import './Totc.scss'
import { Link } from 'react-router-dom'
import parttwo1 from '../../assets/img/card1.jpg'
function Totc() {
  return (
    <div className='Totc'>
      <div className="container">
        <div className="container__head">
          <h1 className='head__title'>
            < span style={{ color: "#2F327D" }}>
              What is
            </span>
            <span style={{ color: "#00CBB8" }}>
              TOTC?
            </span>

          </h1>
          <p className='head__p'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
          <div className="card__container">
            <div className="card1">
              <h2>
                FOR INSTRUCTORS
              </h2>
              <button className='card1__btn'>
                Start a class today
              </button>
            </div>
            <div className="card2">
              <h2>
                FOR STUDENTS
              </h2>
              <button className='card2__btn'>
                Enter access code
              </button>
            </div>
          </div>
        </div>

        <div className="container__body">
          <div className="part1">
            <nav className='part1__circle1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none">
                <path opacity="0.6" d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5H580C590.77 0.5 599.5 9.23045 599.5 20V380C599.5 390.77 590.77 399.5 580 399.5H20C9.23046 399.5 0.5 390.77 0.5 380V20Z" fill="#171B41" fill-opacity="0.5" stroke="black" />
              </svg>
            </nav>
            <h3 className='part1__title'>
              <span style={{ color: "#2F327D" }}>
                Everything you can do in a physical classroom,
              </span>
              <span style={{ color: "#00CBB8" }}>
                you can do with TOTC
              </span>
            </h3>
            <p className='part1__p'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            <Link className='part1__link'>Learn more</Link>
          </div>
          <div className="part2">
            <div className="box1">
            </div>
            <div className="box2">
            </div>
            <img src={parttwo1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Totc