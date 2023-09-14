import React from 'react'
import style from './Portfolio.module.css';
import img1 from '../../images/port1.png';
import img2 from '../../images/port2.png';
import img3 from '../../images/port3.png';

export default function Portfolio() {
  return (
    <>
      <section className='p-5'>
        <div className={`content mt-5 ${style.mainColor}`}>
          <div className="container text-center">
            <h2 className='fw-bold fs-1'>PORTFOLIO COMPONENT</h2>
            <div className='mb-2 d-flex justify-content-center align-items-center'>
              <div className={`${style.starLine} mx-3`}></div>
              <i class="fa-solid fa-star position relative"></i>
              <div className={`${style.starLine} mx-3`}></div>
            </div>
            <div className="row mt-5 gy-3">
              <div className="col-md-4">
                <div className={style.item}>
                  <figure><img src={img1} alt="" className='w-100 rounded-3' /></figure>
                  <div className={`${style.layer} rounded-3 d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={style.item}>
                  <figure><img src={img2} alt="" className='w-100 rounded-3' /></figure>
                  <div className={`${style.layer} rounded-3 d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={style.item}>
                  <figure><img src={img3} alt="" className='w-100 rounded-3' /></figure>
                  <div className={`${style.layer} rounded-3 d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={style.item}>
                  <figure><img src={img1} alt="" className='w-100 rounded-3' /></figure>
                  <div className={`${style.layer} rounded-3 d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={style.item}>
                  <figure><img src={img2} alt="" className='w-100 rounded-3' /></figure>
                  <div className={`${style.layer} rounded-3 d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={style.item}>
                  <figure><img src={img3} alt="" className='w-100 rounded-3' /></figure>
                  <div className={`${style.layer} rounded-3 d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus text-white fa-5x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}