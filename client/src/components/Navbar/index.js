import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar glass">

      <div className={`nav-links ${open ? 'active' : ''}`}>
        <Link className="lnk" to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link className="lnk" to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link className="lnk" to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link className="lnk" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </div>
  );
}