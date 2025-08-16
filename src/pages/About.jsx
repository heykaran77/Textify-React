import React, { useState } from "react";

const About = (props) => {
  let myStyle = {
    color: props.mode === "light" ? "#002157" : "#0c0c0c",
    backgroundColor: props.mode === "light" ? "#fff" : "#c2c2c2ff",
  };
  return (
    <div
      className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
      <div className=" d-flex justify-content-between align-items-center">
        <h2 className="my-3">About Us</h2>
        <div className="form-check form-switch">
          {props.mode === "light" ? (
            <i className="ri-moon-fill"></i>
          ) : (
            <i className="ri-sun-fill"></i>
          )}
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={props.toggleMode}
          />
        </div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}>
              <strong>What is Textify?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}>
            <div className="accordion-body">
              Textify is a simple yet powerful text transformation tool built
              with React. Whether you want to convert text to uppercase,
              lowercase, proper case, or clean up unwanted spaces, Textify makes
              it easy and instant. No need for complex editors — just paste your
              text, click a button, and get the result.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}>
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}>
            <div className="accordion-body">
              <i>Uppercase & Lowercase Conversion</i> – Instantly change text
              case. <br />
              <i>Capitalization Tool</i> – Convert sentences or words into{" "}
              proper case. <br />
              <i>Copy to Clipboard</i> – Quickly copy transformed text with a
              single click. <br /> <i>Clear Text</i> – Start fresh anytime with
              the clear button. <br /> <i>Remove Extra Spaces</i> – Clean messy
              formatting instantly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}>
              <strong>Why Use Textify?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}>
            <div className="accordion-body">
              Textify saves time for students, content creators, and developers
              who frequently deal with text formatting. It works directly in
              your browser, requires no downloads, and delivers results
              instantly. Whether you're preparing social media captions,
              cleaning up code comments, or formatting documents, Textify is
              your quick solution.
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-primary my-3" onClick={handleToggle}>
        {btnToggle}
      </button> */}
    </div>
  );
};

export default About;
