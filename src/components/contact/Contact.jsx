import React from "react";
import "./contact.css";
import Phone from "./../../images/phone.png";
import Email from "./../../images/email.png";
import Address from "./../../images/address.png";

const Contact = () => {
  const _handleSubmit = (e) => {
    console.log("This is log from form");
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Hey, Lets connect</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="email" className="contact-info-icon" />
              <p>adityaingle39@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <img src={Email} alt="phone" className="contact-info-icon" />
              <p>8369964052</p>
            </div>

            <div className="contact-info-item">
              <img src={Address} alt="address" className="contact-info-icon" />
              <p>
                2830,CasaViva, A wing, Tower 4 near Lodha Luxuria, Thane West,
                Mumbai, 400060
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>Hey, this is Aditya Ingle,</b> B.E in Computers, 2020 batch,
            currently working as a full stack developer in Dwebbox Private
            Limited, Vile parle west.
          </p>
          <form onSubmit={_handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Email" />
            <textarea rows="5" placeholder="Message">
              dsfdsfds
            </textarea>
            <div>
              <button> Submit </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
