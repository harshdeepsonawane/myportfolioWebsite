import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // e.g., service_xxxxx
        "YOUR_TEMPLATE_ID", // e.g., template_yyyyy
        form.current,
        "YOUR_PUBLIC_KEY" // e.g., aBcDefGhIjKlmn0
      )
      .then(
        result => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        error => {
          alert("Failed to send message. Error: " + error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email ID" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
