import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const validate = () => {
    let tempErrors = {};

    if (!form.name.trim()) tempErrors.name = 'Name is required';

    if (!form.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Invalid email';
    }

    if (!form.message.trim()) tempErrors.message = 'Message cannot be empty';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      await axios.post('https://aj-portfolio-rw1o.onrender.com/contact', form);

      setSuccess('Message sent successfully ✅');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err) {
      setSuccess('❌ Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Contact Me</h2>

        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </motion.div>
    </section>
  );
}