import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar glass">
        <Link className='lnk' to="/">Home</Link>
        <Link className='lnk' to="/about">About</Link>
        <Link className='lnk' to="/projects">Projects</Link>
        <Link className='lnk' to="/contact">Contact</Link>
    </div>
  );
}