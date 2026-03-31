import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

const projects = [
  {
    title: 'Jobby App',
    liveDemo: 'https://ajjobapp.ccbp.tech/login',
    github: 'https://github.com/AjayPaul7188/Jobby-App.git',
    img: '/images/JobImage.jpg',
    intro: 'Job search app with filters, salary range, and authentication.'
  },
  {
    title: 'Emoji Game',
    liveDemo: 'https://emojigameaj.ccbp.tech/',
    github: 'https://github.com/AjayPaul7188/Emoji-Game.git',
    img: '/images/Emojiimage.jpg',
    intro: 'Interactive emoji game with score tracking and unique selection logic.'
  },
  {
    title: 'Nxt Trends',
    liveDemo: 'https://ajtrnds.ccbp.tech/login',
    github: 'https://github.com/AjayPaul7188/nxtTrends.git',
    img: '/images/TrendsImage.jpg',
    intro: 'E-commerce UI inspired by Amazon & Flipkart with modern UX.'
  }
];

export default function Projects() {
  return (
    <section className="section">
      <div className="glass project-section">
        <h1 className="project-title">Projects</h1>

        <div className="projects">
          {projects.map((p, i) => (
            <motion.div
              className="project-card"
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img className="project-img" src={p.img} alt={p.title} />

              <h3>{p.title}</h3>
              <p>{p.intro}</p>

              <div className="btn-group">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <button className="btn">GitHub</button>
                </a>

                <a href={p.liveDemo} target="_blank" rel="noreferrer">
                  <button className="btn outline">Live</button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}