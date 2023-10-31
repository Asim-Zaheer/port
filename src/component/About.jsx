import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import cv from "../assesst/NEWCV.pdf"
// import { Container } from 'react-bootstrap'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  
} from "react-icons/fa";

function About() {
  return (
    <>
      <Common
        name="Get to Know About"
        imgsrc="/images/bg2.png"
        visit="/contact"
        btname="Contact Me Now"
        // para=""
        para="Welcome to my portfolio. I am Muhammad Asim Zaheer, a Front-End Web Developer. I am currently pursuing a degree in Computer Science at UBIT. My expertise lies in HTML, CSS, JavaScript, React, Bootstrap, and SQL. My next goal is to master the MERN (MongoDB, Express, React, Node.js) stack. Thank you for visiting my portfolio. "
      />
      <div className="container">
        <div className="row">
          <div className=" col-md-6 col-sm-8 col-10 order-1 order-sm-2 mx-auto">
              <NavLink to="https://drive.google.com/drive/u/1/folders/1jO602GOsHKFotEgQoCi16MLX4EBb-Z8w" download={cv} className="btn-cv  ">
            Download Cv from here
              </NavLink>
          </div>
        </div>
      </div>
      <div className=" container-fluid  ">
        <div className="row   mb-4">
          <div className="col-10 col-md-10  col-sm-2 mx-auto ">
            <div className="icons  mt-5 ">
              <a
                className="git ms-3 me-4 mb-4"
                href="https://github.com/Asim-Zaheer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
              className="linkedIn me-3"
                href="https://www.linkedin.com/in/asim-zaheer-813674228/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="ints me-4 mb-4"
                href="https://www.instagram.com/muhammada2221/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              
              <a
                className="me-4 mb-4"
                href="https://wa.me/923223661298"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
             
              <a
                className="facebook me-4 mb-4"
                href="https://www.facebook.com/iasimzaheer/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="me-4 mb-4"
                href="https://twitter.com/Muhamma35553348"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

// Greetings and welcome to my portfolio. My name is Muhammad Asim Zaheer, and I am a dedicated Front-End Web Developer. I am currently pursuing a degree in Computer Science at UBIT, where I am honing my skills and knowledge in various web development technologies.

// My expertise spans a range of essential technologies, including HTML, CSS, JavaScript, React, Bootstrap, and SQL. These skills have allowed me to craft engaging and user-friendly web experiences. As I progress in my academic journey, my next goal is to master the MERN (MongoDB, Express.js, React, Node.js) stack, further expanding my capabilities in the world of web development.

// Thank you for taking the time to visit my portfolio, and I look forward to sharing my projects and experiences with you.
