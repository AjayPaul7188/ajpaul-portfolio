import React from 'react';
import { motion } from 'framer-motion';
import { IoLocation } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import './index.css';

export default function Home() {
  return (
    <section className="section">
      <motion.div className="glass1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className='section1'>
            <h1 style={{fontSize: '40px'}}>Hi, I'm Ajay</h1>
            <p style={{fontSize: '18px', color: '#7531a8'}}>Full Stack Developer</p>
            <p style={{color: '#5e5c5e'}}>Full Stack Developer specializing in MERN stack, building scalable and modern web applications.
            Passionate about creating efficient, user-friendly, and impactful digital solutions.</p>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IoLocation />
                <p className='para'>Based in Hyderabad</p>
            </div>
            <button className='resumebtn'><a href="/resume.pdf" style={{textDecoration: 'none', color: '#000000', fontWeight: '600'}} download>Download Resume</a></button>
            <hr style={{
            border: 'none',
            height: '2px',
            backgroundColor: '#020617',
            margin: '20px 0'
            }}  />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p className='para'>Follow me:</p>
                <div>
                    <a className='media' href='https://www.instagram.com/ajay_paul_mummidi?igsh=MWxxa2o5ZXB5NW91NA==' target='_blank' rel='noopener norefferer'><IoLogoInstagram /></a>
                    <a className='media' href='https://www.linkedin.com/in/ajay-paul-mummidi-1133251b8/' target='_blank' rel='noopener norefferer'><IoLogoLinkedin /></a>
                </div>
            </div>
        </div>
        <div className='section2'>
            <img className='img' src="/images/Myimage.jpeg" alt="My Image"/>
        </div>
      </motion.div>
    </section>
  );
}