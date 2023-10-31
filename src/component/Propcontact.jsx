import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useRef } from 'react'
function Propcontact(props) {
 
  return (
    <>
    <div class="mb-3 ">
    <label for="exampleFormControlInput1" class="form-label fw-bold">
     {props.Name}
     &nbsp; < FontAwesomeIcon icon={props.img} />

    </label>
    <input
    // ref={props.messageTextRef}
    name={props.name}
      type={props.type}
      class="form-control  "
      id="exampleFormControlInput1"
      placeholder=  {props.placeholder}
    />
  </div>
  </>
  )
}

export default Propcontact