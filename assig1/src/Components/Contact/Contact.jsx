import React from 'react'
import style from './Contact.module.css';

export default function Contact() {
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
          </div>

          <div className="container">

            <div className="forms mt-5">

              <div className={`form-floating mb-3 ${style.form} rounded-3`}>
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">UserName: </label>
              </div>
              <div className={`form-floating mb-3 ${style.form} rounded-3`}>
                <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">UserAge: </label>
              </div>
              <div className={`form-floating mb-3 ${style.form} rounded-3`}>
                <input type="mail" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">UserEmail: </label>
              </div>
              <div className={`form-floating mb-3 ${style.form} rounded-3`}>
                <input type="password" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">UserPassword: </label>
              </div>
             
             <button className={`${style.custmBtn}`}>Send Message</button>

            </div>
          </div>


        </div>
      </section>

    </>
  )
}
