import React from 'react'
import style from './About.module.css';
export default function About() {
  return (
    <>
      <section className={`${style.mainBg} py-5`}>
        <div className={`content d-flex justify-content-center align-items-center ${style.h}`}>
          <div className="container text-center text-white">
            <h2 className='fw-bold fs-1'>ABOUT COMPONENT</h2>
            <div className='mb-2 d-flex justify-content-center align-items-center'>
              <div className={`${style.starLine} mx-3`}></div>
              <i class="fa-solid fa-star position relative"></i>
              <div className={`${style.starLine} mx-3`}></div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="item">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}