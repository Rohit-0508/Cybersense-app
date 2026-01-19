import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import logo from '../../assets/logo.png';
import profileImage from '../../assets/profileIcon.png'; // Add your profile image here
import linkedinIcon from '../../assets/linkedin.png'; // Add LinkedIn icon image
import githubIcon from '../../assets/github.png'; // Add GitHub icon image
import gmail from '../../assets/gmail.png'
import './About.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='about'>
        <div className='about-logo'>
          <img src={logo} alt="CyberSense Logo" />
          <p>Welcome to CyberSense! This site is dedicated to providing educational resources for individuals who are starting their journey in cybersecurity. Whether you're a student, a professional looking to expand your skill set, or simply someone interested in the field, CyberSense aims to be your go-to source for learning the basics of cybersecurity.</p>
        </div>
        <div className="about-me">
          <h1>About Me</h1>
          <img src={profileImage} alt="Profile" className="profile-image" />
          <p>I am <span>ROHIT VERMA</span>, a web developer with a strong interest in creating educational platforms. CyberSense is a project I developed to showcase my skills in the MERN (MongoDB, Express, React, Node.js) stack while contributing valuable knowledge to those interested in cybersecurity.</p>
        </div>
        <div className="about-purpose">
          <h1>Project Purpose</h1>
          <ul>
          <p>CyberSense is more than just a website—it's a demonstration of my proficiency in the MERN stack. Through this project, I aim to:</p>
          
            <li>Showcase my abilities in full-stack web development.</li>
            <li>Provide a useful resource for beginners in cybersecurity.</li>
            <li>Highlight my dedication to creating educational content that is both engaging and informative.</li>
          </ul>
        </div>
        <div className="about-why">
          <h1>Why CyberSecurity?</h1>
          <p>In today's digital age, understanding cybersecurity is essential. With increasing cyber threats such as malware, phishing, and hacking, knowing how to protect your information and systems is crucial. CyberSense addresses this need by offering clear, concise, and practical information on fundamental cybersecurity topics.</p>
        </div>
        <div className='about-journey'>
          <p>Developing CyberSense has been an enriching experience, allowing me to combine my technical skills with my passion for education. From designing the user interface to implementing backend functionality, every aspect of this site demonstrates my expertise in web development.</p>
        </div>
        <div className="about-contact">
          <h1>Get in Touch</h1>
          <p>I would love to hear from you! If you have any questions, feedback, or suggestions, feel free to contact me at .</p>
          <div className="social-icons">
          <a href="mailto:rohitranaut91@gmail.com" title='G-mail'>
            <img src={gmail} alt="" />
          </a>
            <a href="https://www.linkedin.com/in/rohit-verma-0324102b8/" title='Linked-In' target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Rohit-0508" title='Github' target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
