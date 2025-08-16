import React, { useState } from "react";

const TextForm = (props) => {
  const [text, settext] = useState("");

  const handleChange = (e) => {
    settext(e.target.value);
  };

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    settext(newText);
    if (text) props.showAlert("UpperCased!", "Success");
    else props.showAlert("Enter text first", "warning");
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    settext(newText);
    if (text) props.showAlert("LowerCased!", "Success");
    else props.showAlert("Enter text first", "warning");
  };

  const handleClear = () => {
    let newText = "";
    settext(newText);
    if (text) props.showAlert("Cleared!", "Success");
    else props.showAlert("No Text to Clear!", "warning");
  };

  const handleCopy = () => {
    let boxText = document.getElementById("textBox01");
    boxText.select();
    navigator.clipboard.writeText(boxText.value);

    if (text) props.showAlert("Copied!", "Success");
    else props.showAlert("No Text to Copy!", "warning");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" ").trim());

    if (text) props.showAlert("Extra Spaces Removed!", "Success");
    else props.showAlert("Enter text first!", "warning");
  };

  const handleCaps = () => {
    let newText = text
      .trim()
      .split(/\s+/)
      .map((word) => word.toLowerCase())
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    settext(newText);
    if (text) props.showAlert("Capitalized!", "Success");
    else props.showAlert("Enter text first!", "warning");
  };
  return (
    <div>
      <style>
        {`#textBox01::placeholder{
            color: ${props.mode === "light" ? "#0c0c0c" : "#fff"}
          }`}
      </style>
      <div className={`my-4 text-${props.mode === "light" ? "dark" : "light"}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <h3> {props.heading}</h3>
          <div className="form-check form-switch">
            {props.mode === "light" ? (
              <i className="ri-moon-fill"></i>
            ) : (
              <i className="ri-sun-line"></i>
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
        <textarea
          className="form-control"
          id="textBox01"
          rows="10"
          value={text}
          placeholder="Enter text here"
          style={{
            backgroundColor: props.mode === "light" ? "cyan" : "crimson",
            color: props.mode === "light" ? "#0c0c0c" : "#fff",
          }}
          onChange={handleChange}></textarea>
      </div>
      <button
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } me-4 my-2`}
        onClick={handleUppercase}>
        To Uppercase
      </button>
      <button
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } me-4 my-2`}
        onClick={handleLowercase}>
        To Lowercase
      </button>
      <button
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } me-4 my-2`}
        onClick={handleCaps}>
        Capitalize
      </button>
      <button
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } me-4 my-2`}
        onClick={handleClear}>
        Clear
      </button>
      <button
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } me-4 my-2`}
        onClick={handleCopy}>
        Copy Text
      </button>
      <button
        className={`btn btn-${
          props.mode === "light" ? "dark" : "light"
        } me-4 my-2`}
        onClick={handleExtraSpace}>
        Remove Extra Spaces
      </button>

      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}>
        <h3>Summary</h3>
        <p>
          <b>
            {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}{" "}
            words & {text.length} characters
          </b>
        </p>
        <p>
          {text.trim().length === 0
            ? null
            : 0.008 * text.trim().split(/\s+/).length + " minutes read"}
        </p>
        <h3>Preview Text</h3>
        <p>{text || "Enter text to Preview"}</p>
      </div>
    </div>
  );
};

export default TextForm;
