import React from 'react'
import { NavLink } from 'react-router-dom'


function Common(props) {
  return (
    <>
    <section id='header' className= "d-flex align-items-center" >
     <div className="container-fluid"   >
      <div className="row">
        <div className="col-10 mx-auto ">
        <div className="row">
          <div className=" animationEffect col-md-6 pt-5 pt-lg-0 order-1 order-lg-2   d-flex justify-content-center flex-column " >
            <h1 className='my-4 ' >
              {props.name}<strong className='brand-name'> Muhammad Asim Zaheer's</strong> Portfolio
            </h1>

              <h2 >
                {props.para}
                </h2>
            <div className="mt-3">
              <NavLink to={props.visit} className="btn-get-start  ">
               {props.btname}
              </NavLink>
            </div>
          
          </div>
          <div className="col-lg-6  order-1 order-lg-2 header-img  ">
            <img className='img-fluid animated pt-4 rounded-circle ' src={props.imgsrc} alt="" />
          </div>
        </div>
        </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default Common