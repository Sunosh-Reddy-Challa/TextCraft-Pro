import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import { Route, Routes } from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ msg: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (props) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled !!", "success");
      document.title = "TextCraft Pro - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled !!", "success");
      document.title = "TextCraft Pro - Light Mode";
    }
  };

  return (
    <>
      <NavBar title="TextCraft pro" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />

      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Text-Content to be Modified..."
                showAlert={showAlert}
              />
            }
          />
          <Route path="/About" element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
