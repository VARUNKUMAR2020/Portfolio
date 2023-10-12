import React from "react";
import pro from "../assets/project.svg";
import code from "../assets/git.png";
import web from "../assets/website.png";

const Projects = () => {
  return (
    <div className="skill">
      <h3 className="fw-bold text-center">
        <img alt="profile" src={pro} className="me-2 mb-2" />
        PROJECTS
      </h3>
      <div className="row mb-5">
        {/* Motor-cycle App */}
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
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/MotorCycle_Service-FrontEnd"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href=" https://varun-motorcycle-service.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Hall-Booking */}
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
                Providing users authentication for login , sigup and if they are
                forgot the password they can also change .
              </p>
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/HallBooking-FrontEnd"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://varun-hallbooking.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Email - authentication */}
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
                Providing users authentication for login , sigup and if they are
                forgot the password they can also change .
              </p>
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/PasswordReset-FrontEnd"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://varun-reset-password.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Library management system */}
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
                books done the form validation using Formik and some React Hooks
                .
              </p>
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/Library_Management-FrontEnd"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://varun-library.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Todo-list */}
        <div className="col-md-4 mt-3">
          <div className="card project-card">
            <img
              alt="profile"
              src="https://user-images.githubusercontent.com/111338202/250984225-38b8feb8-49e5-413c-9a04-4044fc3c19e8.jpg"
              className="card-img-top  img-fluid"
            />
            <div className="card-body">
              <h6 className="card-title fs-5">TODO LIST - REACT</h6>
              <p className="card-text fw-light fs-6 ">
                Providing users the list out the works to do and make them to
                mark as done or not.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/Todo-App"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://v-todo-web-app.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Blog*/}
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
                Providing users to read the Blog without any buffers using react
                router dom
              </p>
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/Varun-Blog"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://varun-blogs.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* curd application */}
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
                Providing users with a user-friendly platform to do the create ,
                read , update and delete functionality .
              </p>
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/CRUD-APP"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://varun-crud-operation.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Contry weather */}
        <div className="col-md-4 mt-3">
          <div className="card project-card">
            <img
              alt="profile"
              src="https://user-images.githubusercontent.com/111338202/274339262-ab485e9d-3ff6-4ebb-a2a6-2352cef923f6.png"
              className="card-img-top  img-fluid"
            />
            <div className="card-body">
              <h6 className="card-title fs-5">COUNTRY CLIMATE - HTML/CSS/JS</h6>
              <p className="card-text fw-light fs-6 ">
                Providing users the current climate of the Country using the
                API's . Design is done using the Bootstrap 5 .
              </p>
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/DAY-17-COUNTRY_WEATHER"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://varun-weather.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Currency Convertor */}
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
            </div>
            <div>
              <a
                href="https://github.com/VARUNKUMAR2020/DAY-20-CURRENCY-CONVERTOR"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={code} className="code-img" />
                  CODE
                </button>
              </a>
              <a
                href="https://varun-currency-convertor.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">
                  <img alt="profile" src={web} className="code-img-web" />
                  WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Projects;
