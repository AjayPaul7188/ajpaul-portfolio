import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="section">
      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>Hi, I'm Ajay</h1>
        <p>Full Stack Developer</p>
        <a href="/resume.pdf" download>Download Resume</a>
      </motion.div>
    </section>
  );
}