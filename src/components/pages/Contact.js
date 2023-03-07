import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inValidMessage, setInValidMessage] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (e) => {
    var inputType = e.target.name;
    var inputValue = e.target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setInValidMessage("Name is required.");
      return;
    } else if (email === "") {
      setInValidMessage("Email is required.");
      return;
    } else if (!validateEmail(email)) {
      setInValidMessage("Invalid Email");
      return;
    } else if (message === "") {
      setInValidMessage("Message Field is empty");
      return;
    }

    // not storing any submission at this version
    setName("");
    setEmail("");
    setMessage("");
    setInValidMessage("");
    console.log("Submit Details", name, email, message);
  };

  const removeValidationError = () => {



      if (name === "") {
        setInValidMessage("Name is required.");
      } else if (email === "") {
        setInValidMessage("Email is required.");

      } else if (!validateEmail(email)) {
        setInValidMessage("Invalid Email");

      } else if (message === "") {
        setInValidMessage("Message Field is empty");

      }
      setTimeout(function() {
      setInValidMessage("")
    }, 1000);
  };

  return (

      <div id="contact">
        <h3 className="title">Contact me</h3>
        <h4 className="invalidmessage">{inValidMessage}</h4>
        <form className="form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={removeValidationError}
            placeholder="Joe Doe"
          ></input>

          <label>Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={removeValidationError}
            placeholder="abc1234@hello@.com"
          ></input>

          <label>Message:</label>
          <br />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={removeValidationError}
          ></textarea>
          <div className="button">

          <button type="submit">Submit</button>
          </div>
        </form>
      </div>

  );
}
