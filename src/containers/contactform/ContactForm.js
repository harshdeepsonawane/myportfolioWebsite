// import React, {useRef} from "react";
// import "./Contact.scss";
// import emailjs from "@emailjs/browser";

// export default function ContactForm() {
//   const form = useRef();

//   const sendEmail = e => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_conrxui", // Replace with your actual service ID
//         "template_51kh9iq", // Replace with your actual template ID
//         form.current,
//         "wzDkCRLMt_ncD4M8P" // Replace with your actual public key
//       )
//       .then(
//         result => {
//           alert("Message sent successfully!");
//           form.current.reset();
//         },
//         error => {
//           alert("Failed to send message. Error: " + error.text);
//         }
//       );
//   };

//   return (
//     <div className="main contact-section" id="contact">
//       <div className="contact-card">
//         <h1 className="section-title">Contact Me</h1>
//         <form ref={form} onSubmit={sendEmail} className="form-container">
//           <div className="form-row">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               required
//             />
//           </div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             required
//           ></textarea>
//           <button type="submit" className="submit-btn">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, {useRef} from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_conrxui", // Replace with your actual service ID
        "template_51kh9iq", // Replace with your actual template ID
        form.current,
        "wzDkCRLMt_ncD4M8P" // Replace with your actual public key
      )
      .then(
        result => {
          Swal.fire({
            toast: true,
            position: "top-end", // 👈 this makes it right aligned
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: "#fefefe",
            color: "#212121"
          });

          form.current.reset();
        },
        error => {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: "Failed to send message. Please try again.",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: "#fff5f5",
            color: "#dc3545"
          });
        }
      );
  };

  return (
    <div className="main contact-main" id="contact">
      <div className="project-card contact-card-glass">
        <h1 className="contact-title">Let's Talk</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form-box">
          <div className="row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
