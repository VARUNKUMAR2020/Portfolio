import React from "react";
import skill from "../assets/skill.svg";
import code from "../assets/code.svg";
import data from "../assets/database.svg";
import tool from "../assets/tools.svg";

const Skills = () => {
  return (
    <div className="skill">
      <h3 className="fw-bold text-center"><img src={skill} className="me-2 mb-3"/>SKILLS</h3>
      <p className="text-center">
        Below is a quick overview of my main technical skill sets and tools I
        use.
      </p>
      <div className="row fw-bold fs-4 skills">
        <div className="col-md-4 ">
          <h3 className="text-center"><img src={code} className="mb-2"/>FrontEnd - Technologies</h3>
          <ul className="list fw-light fs-5  text-center">
            <li>HTML 5 / CSS 3</li>
            <li>Bootstrap 5</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="col-md-4 ">
          <h3 className="text-center"><img src={data} className="mb-2"/>BackEnd - Technologies</h3>
          <ul className="list fw-light fs-5  text-center">
            <li>Node JS</li>
            <li>Express JS</li>
            <li>My SQL</li>
            <li>Mongo DB</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h3 className="text-center"><img src={tool} className="mb-2"/>Tools Known</h3>
          <ul className="list fw-light fs-5 text-center">
            <li>Visual Code</li>
            <li>Postman</li>
            <li>GitHub</li>
            <li>Mongo Compass/Atlas</li>
          </ul>
        </div>
      </div>
      <hr className="hr"/>
    </div>
  );
};

export default Skills;
