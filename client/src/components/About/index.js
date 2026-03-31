import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

export default function About() {
  return (
    <section className="section">
      <motion.div
        className="glass1 about-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* LEFT */}
        <div className="section1">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Hi, I’m Ajay Paul Mummidi, a passionate Full Stack Developer based in India.
            I’m a B.Tech graduate in Electronics and Communication Engineering, with a strong interest in building modern web applications.
          </p>

          <p className="about-text">
            I specialize in the MERN stack and enjoy creating responsive layouts, efficient backend systems,
            and interactive user experiences that combine performance with clean design.
          </p>

          <h3 className="skills-title">Skills</h3>

          <div className="skills">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Databases</span>
            <span>AI in Cloud</span>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          className="section2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img className="img" src="/images/Myimage.jpeg" alt="profile" />
        </motion.div>
      </motion.div>
    </section>
  );
}