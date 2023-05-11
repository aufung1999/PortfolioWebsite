import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Contact.module.css";

import TrackVisibility from "react-on-screen";

import ShowMany from "../utilities/ShowMany";
import ShowOnce from "../utilities/ShowOnce";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage(true);
    console.log(formRef.current);

    if (formRef.current == null) return;

    emailjs
      .sendForm(
        "service_v3ye7zs",
        "template_gn7eol4",
        formRef.current,
        "baHB3VAHm-SplT5zJ"
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
    <section id="contact">
      <h5>
        {/* <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__fast"}
        > */}
        Get In Touch
        {/* </ShowMany> */}
      </h5>
      <h5>
        {/* <ShowMany
          mode_IN={"animate__jackInTheBox"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__fast"}
        > */}
        I do receive your messages and will respond asap if the valid email is
        provided
        {/* </ShowMany> */}
      </h5>
      <h2>
        {/* <ShowMany
          mode_IN={"animate__zoomInDown"}
          mode_OUT={"animate__zoomOutDown"}
          speed={"animate__fast"}
        > */}
        Contact Me
        {/* </ShowMany> */}
      </h2>
      <div className="container d-flex justify-content-center">
        <div className={styles["contact__container"]}>
          <div className={styles["contact__options"]}>
            {/* animate.css */}
            <ShowMany
              mode_IN={"animate__slideInLeft"}
              mode_OUT={"animate__slideOutLeft"}
              speed={"animate__fast"}
            >
              <article className={styles["contact__option"]}>
                <MdOutlineEmail className={styles["contact__option-icon"]} />
                <h4>Email</h4>
                <h5>aufung1912@gmail.com</h5>
                <a href="mailto:aufung1912@gmail.com">Send a message</a>
              </article>
            </ShowMany>
          </div>
          {/* animate.css */}
          <ShowMany
            mode_IN={"animate__slideInRight"}
            mode_OUT={"animate__slideOutRight"}
            speed={"animate__fast"}
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Full Name"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Your Email"
                name="user_email"
                required
              />
              <textarea
                placeholder="Your message"
                rows={5}
                name="message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              {message && <span>Thanks, I&#39;ll reply ASAP </span>}
            </form>
          </ShowMany>
        </div>
      </div>
    </section>
  );
};

export default Contact;
