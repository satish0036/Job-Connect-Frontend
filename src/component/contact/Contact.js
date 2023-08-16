import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
    const [message,setMessage]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true)

    console.log('Form submitted:', formData);
    setFormData({
        name: '',
        email: '',
        message: '',
      })
 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage(false)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to get in touch with us.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />
        
        <button type="submit">Send Message</button>
        {message?<div className='c-message'>Thank you for reaching out! Your message has been received.</div>:""}
      </form>
    </div>
  );
};

export default Contact;
