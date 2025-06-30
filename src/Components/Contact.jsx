import React, { useContext } from "react";
import { Theme } from "./Theme";

export default function Contact() {
  const [isDark] = useContext(Theme);
  return (
    <div className="contact">
      <h1 className="contact_title">CONTACT</h1>
      <form action="">
        <input
          className={`${isDark ? "inputForm" : ""}`}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <input
        className={`${isDark ? "inputForm" : ""}`}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
        className={`${isDark ? "inputForm" : ""}`}
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
        <button className="Resume">Submit</button>
      </form>
    </div>
  );
}
