import React from 'react';
import { motion } from 'framer-motion';
import { IoLocation, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import './index.css';

export default function Home() {
  return (
    <section className="section">
      <motion.div
        className="glass1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT */}
        <div className='section1'>
          <h1 className="title">Hi, I'm Ajay</h1>
          <p className="role">Full Stack Developer</p>

          <p className="desc">
            Full Stack Developer specializing in MERN stack, building scalable and modern web applications.
            Passionate about creating efficient, user-friendly, and impactful digital solutions.
          </p>

          <div className='location'>
            <IoLocation />
            <p>Based in Hyderabad</p>
          </div>

          <button className='resumebtn'>
            <a href="/resume.pdf" download>Download Resume</a>
          </button>

          <hr className="divider" />

          <div className='social'>
            <p>Follow me:</p>
            <div>
              <a className='media' href='https://www.instagram.com/ajay_paul_mummidi' target='_blank' rel="noreferrer">
                <IoLogoInstagram />
              </a>
              <a className='media' href='https://www.linkedin.com/in/ajay-paul-mummidi' target='_blank' rel="noreferrer">
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          className='section2'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img className='img' src="/images/Myimage.jpeg" alt="profile" />
        </motion.div>
      </motion.div>
    </section>
  );
}