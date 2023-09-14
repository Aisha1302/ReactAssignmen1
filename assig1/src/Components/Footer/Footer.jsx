import React from 'react'
import style from './Footer.module.css';
export default function Footer() {
  return (
    <>
      <footer className='text-white'>
        <div className={`${style.secBg} footer-bg p-5`}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="item">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <h3>AROUND THE WEB</h3>
                  <div className={`d-flex ${style.icons}`}>
                    <div className={`${style.icon} mx-auto`}><i class="fa-brands fa-facebook"></i></div>
                    <div className={`${style.icon} mx-auto`}><i class="fa-brands fa-twitter"></i></div>
                    <div className={`${style.icon} mx-auto`}><i class="fa-brands fa-linkedin-in"></i></div>
                    <div className={`${style.icon} mx-auto`}><i class="fa-solid fa-globe"></i></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="item">
                  <h3 className='text-center'>ABOUT FREELANCER</h3>
                  <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer bg-dark text-center p-3">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  )
}
