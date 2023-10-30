import React from "react";
import img from "../assets/varunkumar.png";
import github from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";

const About = () => {
  return (
    <div className="about">
      <div className="row mb-5">
        <div className="col-md-6">
          <p className="fs-5 fw-light">
            <span className="d-block fs-3 fw-medium">Hello , my name is </span>
            <span className="d-block fs-1 fw-bold">VARUNKUMAR V</span>
            I'm a MERN-stack developer specialised in frontend and backend
            development for scalable web apps.I have made a variety of Mern
            Stack Applications. Want to know how I may help your project? Check
            out my projects from my GitHub Profile.
          </p>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1R-hfroZSPrU5FfQRCbEhvKJw11VWOepe/view?usp=sharing"
            target="_blank"
          >
            <button className="resume btn fw-bold fs-6">My Resume</button>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/VARUNKUMAR2020"
            target="_blank"
            className="ms-4"
          >
            <img alt="profile" src={github} />
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/varunkumar-v-542365193/"
            target="_blank"
            className="ms-4"
          >
            <img alt="profile" src={linkedIn} />
          </a>
        </div>
        <div className="col-6 text-center image">
          <img alt="profile" src={img} className="pro-img" />
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default About;
