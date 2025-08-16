import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import About from "./pages/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { Route, Routes } from "react-router-dom";

const App = () => {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#242424ff";
      showAlert("Dark Mode Enabled!", "success");
      document.title = "Textify - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled!", "success");
      document.title = "Textify - Light Mode";
    }
  };

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <div>
      <Navbar title="Textify" mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route
            path="/"
            element={ */}
        <TextForm
          heading="Enter text to Analyze"
          mode={mode}
          showAlert={showAlert}
          toggleMode={toggleMode}
        />
        {/* }
          /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    </div>
  );
};

export default App;
