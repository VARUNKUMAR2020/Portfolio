import React, { useState } from "react";
import pro from "../assets/project.svg";
import front from "../assets/frontend.png";
import back from "../assets/backend.png";
import web from "../assets/website.png";
import node from "../assets/node.png";
import postman from "../assets/POSTMAN.png";
import mongodb from "../assets/mongodb.png";

const Projects = () => {
  const [project, setProject] = useState("fullstack");
  const [frontcss, setfront] = useState("project-display");
  const [merncss, setmern] = useState("resume");
  const [backcss, setback] = useState("project-display");

  const handleMern = () => {
    setProject("fullstack");
    setmern("resume");
    setfront("project-display");
    setback("project-display");
  };

  const handleFrontend = () => {
    setProject("frontend");
    setmern("project-display");
    setfront("resume");
    setback("project-display");
  };

  const handleBackend = () => {
    setProject("backend");
    setmern("project-display");
    setfront("project-display");
    setback("resume");
  };

  return (
    <div className="skill">
      <h3 className="fw-bold text-center">
        <img alt="profile" src={pro} className="me-2 mb-2" />
        PROJECTS
      </h3>

      <div className="my-4">
        <button className={`btn ${merncss}`} onClick={handleMern}>
          MERN STACK PROJECTS
        </button>
        <button className={`btn ${frontcss} ms-3`} onClick={handleFrontend}>
          FRONT-END PROJECTS
        </button>
        <button className={`btn ${backcss} ms-3`} onClick={handleBackend}>
          BACK-END PROJECTS
        </button>
      </div>

      {project === "fullstack" ? (
        <div className="row mb-5">
          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/267012425-a6c4f083-c1f9-491f-a397-364054833ae5.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">MOTOR CYCLE SERVICE - MERN</h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users with a user-friendly platform to schedule
                  services and access their bike's service history.
                </p>
                <div className="text-start fs-6">
                  <a
                    href="https://github.com/VARUNKUMAR2020/MotorCycle_Service-FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      FrontEnd
                    </button>
                  </a>

                  <a
                    href="https://github.com/VARUNKUMAR2020/MotorCycle_Service-BackEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={back} className="code-img" />
                      BackEnd
                    </button>
                  </a>

                  <a
                    href=" https://varun-motorcycle-service.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/274325694-8240a63c-9307-471a-aa22-5cb1561bebc8.png"
                className="card-img-top  img-fluid "
              />
              <div className="card-body">
                <h6 className="card-title fs-5">HALL BOOKING - MERN</h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users authentication for login , sigup and if they
                  are forgot the password they can also change . Functionality
                  of booking the Hall and create own hall .
                </p>
                <div className="ms-3">
                  <a
                    href="https://github.com/VARUNKUMAR2020/HallBooking-FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      FrontEnd
                    </button>
                  </a>

                  <a
                    href="https://github.com/VARUNKUMAR2020/HallBooking-BackEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={back} className="code-img" />
                      BackEnd
                    </button>
                  </a>

                  <a
                    href="https://varun-hallbooking.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/257068044-b9c4376b-f488-4ce0-8c19-0167a87acb6f.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">LIBRARY MANAGEMENT- MERN</h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users to add the books , add author , and read the
                  books done the form validation using Formik and some React
                  Hooks .
                </p>
                <div className="ms-3">
                  <a
                    href="https://github.com/VARUNKUMAR2020/MotorCycle_Service-FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      FrontEnd
                    </button>
                  </a>

                  <a
                    href="https://github.com/VARUNKUMAR2020/MotorCycle_Service-BackEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={back} className="code-img" />
                      BackEnd
                    </button>
                  </a>

                  <a
                    href=" https://varun-motorcycle-service.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/270272210-5ba0c055-3ca1-4653-b5b4-536a9b2f6045.png"
                className="card-img-top  img-fluid "
              />
              <div className="card-body">
                <h6 className="card-title fs-5">EMAIL AUTHENTICATION - MERN</h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users authentication for login , sigup and if they
                  are forgot the password they can also change . Forgot password
                  is done by sending Link to the mail .
                </p>
                <div className="ms-3">
                  <a
                    href="https://github.com/VARUNKUMAR2020/PasswordReset-FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      FrontEnd
                    </button>
                  </a>

                  <a
                    href="https://github.com/VARUNKUMAR2020/PasswordReset-Backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={back} className="code-img" />
                      BackEnd
                    </button>
                  </a>

                  <a
                    href=" https://varun-reset-password.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/270273163-329e569a-2740-44fc-99c4-0663f43df741.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">URL SHORTENER- MERN</h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users to add the books , add author , and read the
                  books done the form validation using Formik and some React
                  Hooks .
                </p>
                <div className="ms-3">
                  <a
                    href="https://github.com/VARUNKUMAR2020/UrlShortner-FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      FrontEnd
                    </button>
                  </a>

                  <a
                    href="https://github.com/VARUNKUMAR2020/PasswordReset-Backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={back} className="code-img" />
                      BackEnd
                    </button>
                  </a>

                  <a
                    href="https://varun-urlshortner.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : project === "frontend" ? (
        <div className="row mb-5">
          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/251685607-0aff62c3-c892-452a-9c1b-bffe8704c5bf.jpg"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">BLOG- REACT</h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users to read the Blog which is designed with React
                  and ued the react router down for the navigation .
                </p>
                <div className="ms-4">
                  <a
                    href="https://github.com/VARUNKUMAR2020/Varun-Blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                  <a
                    href=" https://varun-blogs.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/270274347-2c20501a-2824-407a-952d-c0275d20b0b6.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">CRUD APPLICATION - REACT</h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users with a user-friendly platform to do the create
                  , read , update and delete functionality . Which is completely
                  done with random API's.
                </p>
                <div className="ms-4">
                  <a
                    href="https://github.com/VARUNKUMAR2020/CRUD-APP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                  <a
                    href="https://varun-crud-operation.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/275711939-360632b3-6dff-415f-a390-e1663ab62d99.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">PRICE LIST - REACT</h6>
                <p className="card-text fw-light fs-6 ">
                  Done a simple project using REACT to show the detail description about the uses regarding the price of the list .
                </p>
                <div className="ms-4">
                  <a
                    href="https://github.com/VARUNKUMAR2020/PricingCard-REACT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                  <a
                    href="https://varun-price-list.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/274339262-ab485e9d-3ff6-4ebb-a2a6-2352cef923f6.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">
                  COUNTRY CLIMATE - HTML/CSS/JS
                </h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users the current climate of the Country using the
                  API's . Where the designing is done with the Bootstrap 5 and
                  CSS 3 .
                </p>
                <div className="ms-4">
                  <a
                    href="https://github.com/VARUNKUMAR2020/DAY-17-COUNTRY_WEATHER"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                  <a
                    href="https://varun-weather.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/270241223-ecfd073e-edab-491b-b490-231439f8774c.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">
                  CURRENCY CONVERTOR - HTML/CSS/JS
                </h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users the current value of the Currency using the
                  API's . Which converts the value of the needed cuurency.
                </p>
                <div className="ms-4">
                  <a
                    href="https://github.com/VARUNKUMAR2020/DAY-20-CURRENCY-CONVERTOR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                  <a
                    href="https://varun-currency-convertor.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://user-images.githubusercontent.com/111338202/275713189-ab7dd128-c81e-449d-b864-b7155b6be76e.png"
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">
                 THIRUKURAL API - HTML/CSS/JS
                </h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users the thirukural of which one they needed , where they need to specify the number  with the meaning of the Kural respectively.
                </p>
                <div className="ms-4">
                  <a
                    href="https://github.com/VARUNKUMAR2020/DAY-20-THIRUKURAL-API"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                  <a
                    href="https://varun-thirukural-api.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={web} className="code-img-web" />
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      ) : (
        <div className="row mb-5">
          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src={node}
                className="card-img-top  img-fluid"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">
                  FILE SYSTEM - NODEJS
                </h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users completed functionality like read , write , update and delete of the file system in the nodejs.
                </p>
                <div className="text-center me-5">
                  <a
                    href="https://github.com/VARUNKUMAR2020/FileSystem"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g8AjMWyS5_rFSGBBWPTkkpi5pVwm7KvNBYNbMPuu2VJzeKmK_LbAziprX87CzEofDc0&usqp=CAU"
                className="mentor"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">
                  ASSIGN MENTOR - NODE / MONGO DB
                </h6>
                <p className="card-text fw-light fs-6 ">
                  Providing users completed functionality like read , write , update and delete of the file system in the nodejs.
                </p>
                <div className="me-4 text-center">
                  <a
                    href="https://github.com/VARUNKUMAR2020/assign-mentor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                  <a
                    href="https://documenter.getpostman.com/view/28001779/2s9XxsUbKd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={postman} className="code-img" />
                      Postman
                    </button>
                  </a>

                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card project-card">
              <img
                alt="profile"
                src={mongodb}
                className="mentor"
              />
              <div className="card-body">
                <h6 className="card-title fs-5">
                  ZEN CLASS - MONGO DB
                </h6>
                <p className="card-text fw-light fs-6 ">
                 Performed the queries regarding the ZEN class database in the mongo compasss and the screen shot is shared with it .
                </p>
                <div className="me-4 text-center">
                  <a
                    href="https://github.com/VARUNKUMAR2020/Zen_DB-MongoDB"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button">
                      <img alt="profile" src={front} className="code-img" />
                      Code
                    </button>
                  </a>

                

                 
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
      <hr className="hr" />
    </div>
  );
};

export default Projects;
