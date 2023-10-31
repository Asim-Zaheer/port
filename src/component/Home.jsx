import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'


function Home() {
  return (
    <>
   <Common
   name="Welcome To" 
   imgsrc="/images/bgp.png"
   visit="/work"
   btname="Get Start"
   para="React Enthusiast"
   
   />
    </>
  )
}

export default Home