import React from 'react'
import { NavLink } from 'react-router-dom'
function Card(props) {
  return (
    <>
       
        <div className="col-md-4 col-10 mx-auto ">
            <div className="card" >
            <img src={props.imgsrc} className="card-img-top" alt="..."/>
            <div className="card-body  ">
                <h5 className="card-title fw-bold ">{props.title}</h5>
                <p className="card-text">{props.des}</p>
                <a  href={props.href} className="btn btn-outline-success">Click here to Check out </a>
            </div>
            </div>
            </div>
       
    </>
  )
}

export default Card