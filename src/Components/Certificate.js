import React from "react";
import certificate from "../assets/certificate.svg";
import cer from "../assets/certificate-small.png";

const Certificate = () => {
  return (
    <div>
      <h3 className="fw-bold text-center mt-5">
        <img alt="profile" src={cer} className=" main-certificate pe-2" />
        CERTIFICATIONS
      </h3>

      <div className="row text-center mb-5 mt-4">
        <div className="col-md-4">
          <h4 className="mt-4">
            <img alt="profile" src={certificate} />
            GUVI GEEK - IIT Madras
          </h4>
          <h5 className=" fw-light">MERN - Stack Developer</h5>
          <a
            href="https://drive.google.com/file/d/1wNrGswP3CeG1NHjbu6q7xpfNStRa0XIa/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="resume btn fw-bold fs-6 mt-3">
              Certificate
            </button>
          </a>
        </div>
        <div className="col-md-4">
          <h4 className="mt-4">
            <img alt="profile" src={certificate} />
            BridgeLabz - Mumbai
          </h4>
          <h5 className=" fw-light ms-5"> Java ,Javascript ,HTML ,CSS </h5>
          <a
            href="https://drive.google.com/file/d/1qGu8WSk3PSM-zUT_VKtAo-b8BI2NOcxR/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="resume btn fw-bold fs-6 mt-3">
              Certificate
            </button>
          </a>
        </div>
        <div className="col-md-4">
          <h4 className="mt-4">
            <img alt="profile" src={certificate} />
            OpenWeaver - Online
          </h4>
          <h5 className=" fw-light">HTML and CSS </h5>
          <a
            href="https://drive.google.com/file/d/1Ve5KI401-_kKGP41TqiBc24FImd_NV8d/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="resume btn fw-bold fs-6 mt-3">
              Certificate
            </button>
          </a>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Certificate;
