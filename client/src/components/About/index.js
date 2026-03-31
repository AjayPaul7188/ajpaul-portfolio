import React from 'react';

export default function About() {
  return (
    <section className="section">
      <div className="glass1">
        <div className='section1'>
        <h2>About Me</h2>
            <p style={{color: '#5e5c5e'}}>Hi, I’m Ajay Paul Mummidi, a passionate and creative Full Stack Developer based in India. <br/>
                I’m a B.Tech graduate in Electronics and Communication Engineering, with a strong interest in building modern and user-friendly web applications. <br />
                I specialize in the MERN stack and enjoy creating responsive layouts, efficient backend systems, and interactive user experiences that combine performance with clean design. <br />
                Currently, I’m improving my skills in:
            </p>
            <ul style={{color: '#5e5c5e'}}>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Databases</li>
                <li>exploring AI technologies in cloud computing to build smarter applications</li>
            </ul>
        </div>

        <div className='section2'>
            <img className='img' src="/images/Myimage.jpeg" alt="My Image"/>
        </div>
      </div>
    </section>
  );
}