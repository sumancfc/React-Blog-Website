import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    alert("Form Submited");
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };
  return (
    <form className='form-wrapper' onSubmit={submitForm}>
      <input
        type='text'
        className='form-control'
        placeholder='Your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type='text'
        className='form-control'
        placeholder='Email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type='text'
        className='form-control'
        placeholder='Phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type='text'
        className='form-control'
        placeholder='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        className='form-control'
        placeholder='Your message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type='submit' className='btn btn-primary'>
        Send <i className='fa fa-envelope-open-o'></i>
      </button>
    </form>
  );
};

export default ContactForm;
