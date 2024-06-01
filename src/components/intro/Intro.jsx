import React from "react";
import "./intro.css";
import Me from "./../../images/me.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <h2 className="intro-name-desc">Hello, My name is</h2>
        <h1 className="intro-name">Aditya Ingle</h1>
        <div className="intro-title">
          <div className="intro-title-wrapper">
            <div className="intro-title-item">Front End Developer</div>
            <div className="intro-title-item">Back End Developer</div>
            <div className="intro-title-item">Mobile Application Developer</div>
          </div>
        </div>
        <div className="intro-description">
          2020,Graduate Software Engineer, from Vidyalankar Institute of
          Technology with a CGPA of 8.06. <br />
          <br />I have done my internship as a full stack developer from CNC Web
          World, Navi Mumbai.
          <br />
          <br /> I have 3 years of work experience as a{" "}
          <b>Mobile Application Developer</b>.
          <br />
          <br />
          Provides services, in making productive mobile apps as and when
          needed.
        </div>
      </div>

      <div className="intro-right">
        <div className="image-background"></div>
        <img src={Me} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
};

export default Intro;
