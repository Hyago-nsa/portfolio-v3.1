import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4wbm9d",
        "template_y0qafaa",
        form.current,
        "7CuPXS4xj2MgKMMB1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contactContainer">
      <section className="contact" id="contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contactSplit ">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              className="contactText contactMessage"
            />
            <input
              id="phone"
              type="number"
              name="phone"
              placeholder="phone"
              className="contactText contactMessage"
            />
          </div>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            className="contactText contactMessage"
          />
          <textarea
            id="message"
            name="message"
            placeholder="message"
            className="contactMessage"
          ></textarea>
          <input type="submit" value="send message" className="ContactBtn" />
        </form>
      </section>
    </div>
  );
};

export default Contact;
