import React from "react";
import edu from "../assets/book.svg";

import degree from "../assets/school.svg";


const Education = () => {
  return (
    <div className="skill">
      <h3 className="fw-bold text-center">
        <img src={edu} className="me-2 mb-2" />
        EDUCATION
      </h3>
      <div className="row text-center mb-5">
      <div className="col-md-4">
        <h4 className="mt-4"><img src={degree} className="me-2 mb-1"/>Bachelor's Degree</h4  >
        <h5 className=" fw-light">B.Tech - Information Technology ( 2016 - 2020 )</h5>
        <h5 className=" fw-light">Sri Sairam Engineering College , Chennai.</h5>
        <h5 className=" fw-light">CGPA - 6.59</h5>
      </div>

      <div className="col-md-4">
        <h4 className="mt-4"><img src={degree} className="me-2 mb-1"/>High School</h4  >
        <h5 className=" fw-light">PCMB ( 2015 - 2016 )</h5>
        <h5 className="fw-light">Vetri Vikaas Boys School , Namakkal</h5>
        <h5 className=" fw-light">Percentage - 83.3%</h5>
      </div>

      <div className="col-md-4">
        <h4 className="mt-4"><img src={degree} className="me-2 mb-1"/>Secondary School</h4  >
        <h5 className=" fw-light">General ( 2013 - 2014 )</h5>
        <h5 className="fw-light">Shiksha Schools , Vellore .</h5>
        <h5 className=" fw-light">Perentage - 95.2%</h5>
      </div>

      </div>
      

      

      <hr className="hr" />

     
    </div>
  );
};

export default Education;
