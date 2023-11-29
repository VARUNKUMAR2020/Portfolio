import React from "react";


const Navbar = () => {
  return (
    <div className="head">
      <div className="row mt-4">
        <div className="col-5">
          <h3 className="h4">
            <span>MERN</span> Stack Developer
          </h3>
        </div>
        {/* <div className="col-5 text-end link">
          <a className="ms-4 text-decoration-none text-light">About</a>
          <a className="ms-4 text-decoration-none text-light">Skill</a>
          <a className="ms-4 text-decoration-none text-light">Education</a>
          <a className="ms-4 text-decoration-none text-light">Certification</a>
          <a className="ms-4 text-decoration-none text-light">Projects</a>
          <a className="ms-4 text-decoration-none text-light">Contact</a>
        </div> */}
        {/* <div className="col-md-2 text-end">
           <button className="border-none rounded-3"><img src={sun}className="button-dark"/>Light Mode</button>
        </div> */}
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Navbar;
