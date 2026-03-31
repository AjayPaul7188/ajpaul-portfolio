import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/contact', form);
    alert('Message Sent!');
  };

  return (
    <section className="section">
      <div className="glass">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <textarea name="message" placeholder="Message" onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}