import React from 'react';


export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('contact form submitted');
        // store form data
    };

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <input type="text" id="message" name="message"/>
        {/* require message */}
        <button>Submit</button>
    </form>
    </div>
  );
}
