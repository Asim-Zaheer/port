import React, { useState, useRef } from "react";
import Propcontact from "./Propcontact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faMailBulk,faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import emailjs from "@emailjs/browser";
import axios from "axios";

function Contact() {

  const messageTextRef =useRef(null)
  const form = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5ydmwwf', 'template_svp0f14', form.current, 'kXvByl8x19j0EILSI')
        .then((result) => {
            console.log(result.text);
            if (messageTextRef.current){
              messageTextRef.current.value=""
              alert("form submitted successfully")
            }
        }, (error) => {
            console.log(error.text);
            alert("Form submission failed")
        });
  setName(' ')
  setEmail(' ')
  // setMessage(' ')
  setPhone(' ')

    };
  const [name ,setName] =useState('')
  const [email ,setEmail] =useState('')
  // const [message ,setMessage] =useState('')
  const [phone , setPhone]=useState('')
//   const handleSubmit = async (e)=>{
//     e.preventDefault();

//     const serviceId ="service_7qxp2xs"
//     const templateId = "template_3v6bntb"
//     const publicId ="zVBijbX-drZZEzN9C"

//     const data={
//       service_id:serviceId,
//       template_id:templateId,
//       public_id:publicId,
//       template_params:{
//         from_name:name,
//         from_email:email,
//         to_name:"Muhammad Asim Zaheer",
//         message:message,
//         phone:phone
//       }
//     }
// try{
//   const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
//   console.log(res.data)
  // setName(' ')
  // setEmail(' ')
  // // setMessage(' ')
  // setPhone(' ')
// }
// catch(err){
//   console.log(err)
// }

//   }

//   const [name ,setName] =useState('')
//   const [email ,setEmail] =useState('')
//   const [message ,setMessage] =useState('')
//   const [phone , setPhone]=useState('')

//  const handleSubmit =(e)=>{
//   e.preventDefault();

//   const serviceID ="service_7qxp2xs"
//   const templateId ="template_3v6bntb"
//   const publickey ="zVBijbX-drZZEzN9C"

//   const templateParams ={
//     from_name:name,
//     from_email:email,
//     to_name:"Muhammad Asim Zaheer",
//     message:message,
//     phone:phone
//   } 

// emailjs.send(serviceID,templateId,publickey,templateParams).then((res)=>{
//     console.log("email agaya  " , res)
//     setName(' ')
//     setEmail(' ')
//     setMessage(' ')
//     setPhone(' ')
//   })
//   .catch((err)=>{
//     console.log("error agaya " , err)
//   })

//  }




  return (
    <>
      <form className="container my-3 " onSubmit={handleSubmit} ref={form}>
        <h1 className="text-center text-uppercase pb-3 ">Contact US</h1>
      
        <div className="row align-items-center ">
          <div className="col-md-6   col-10 mx-auto gx-3 ">
            
            <Propcontact
              name="from_name"
              // ref={messageTextRef}
              Name="Full Name"
              type="text"
              placeholder="Enter your Name"
              img={faUser}
              value={name}
              onChange={(e)=> setPhone(e.target.value)}
              
              />
          
            <Propcontact
              img={faPhone}
              // ref={messageTextRef}
              name="phone"
              Name="Phone Number"
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
            />
            <Propcontact
            img={faMailBulk}
              Name="Email Address"
              // ref={messageTextRef}
              name="from_email"
              type="text"
              placeholder="name@example.com"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label fw-bold">
              Message or any thought &nbsp;
              < FontAwesomeIcon icon={faCoffee} />
              </label>
              <textarea
              ref={messageTextRef}
                name="message"
                class="form-control "
                placeholder="Type your message here"
                id="exampleFormControlTextarea1"
                rows="3"
           
              ></textarea>
            </div>
            <div class="col-12 my-2 pb-2">
    <button class="contactbtn btn btn-outline"  type="submit"  >Submit form</button>
  </div>
          </div>
          <div className="container">
            <div className="row">
          <div className=" col-md-6 mx-auto   ">
            <img className=" animated rounded-5 img fluid " src="/images/bg4.png" alt="" />
          </div>
              
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
