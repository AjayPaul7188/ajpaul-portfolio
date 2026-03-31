import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!form.name.trim()) {
      tempErrors.name = 'Name is required';
    }

    if (!form.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is invalid';
    }

    if (!form.message.trim()) {
      tempErrors.message = 'Message cannot be empty';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.post('http://localhost:5000/contact', form);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      alert('Error sending message');
    }
  };

  return (
    <section className="section">
      <div className="contact-card">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          
          {/* Name */}
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          {/* Email */}
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          {/* Message */}
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}