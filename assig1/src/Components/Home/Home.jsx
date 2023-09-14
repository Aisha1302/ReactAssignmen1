import React from 'react'
import style from './Home.module.css';
import homeImg from '../../images/home.png';
export default function Home() {
  return (
    <>
      <section className={`${style.mainBg} text-white`}>
        <div className={`content d-flex justify-content-center align-items-center ${style.h}`}>
          <div className="container text-center">
            <figure><img src={homeImg} alt="" /></figure>
            <h2 className='fs-1 fw-bold'>START FRAMEWORK</h2>
            <div className='mb-2 d-flex justify-content-center align-items-center'>
              <div className={`${style.starLine} mx-3`}></div>
              <i class="fa-solid fa-star position relative"></i>
              <div className={`${style.starLine} mx-3`}></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  )
}