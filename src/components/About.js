import React from "react";
//import { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  return (
    <>
      <div>
        <div className="accordion my-5 mx-5" id="accordionExample">
          <h1
            className="text-left"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            About Us
          </h1>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Idea behind the website
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                The concept behind creating a basic "TextCraft pro" website was
                to provide users with essential text manipulation tools in a
                user-friendly and accessible manner. The website aims to offer
                functionalities such as text case conversion, whitespace
                management, and text copying, all within a single platform. By
                integrating these features, the goal is to streamline text
                processing tasks and enhance user productivity. The website's
                design focuses on simplicity and ease of use, ensuring that
                individuals can efficiently format and modify text for various
                purposes. With a clear emphasis on enhancing text-related
                workflows, "TextCraft pro" seeks to cater to users seeking
                efficient and convenient text editing solutions.
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
                style={myStyle}
              >
                Features - TextCraft Pro
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                The core features of a fundamental TextCraft Pro website
                encompass essential text transformation capabilities, including
                uppercase and lowercase conversions, text copying, clearing, and
                whitespace removal. Additionally, the inclusion of a dark mode
                functionality augments user experience by offering a visually
                comfortable interface for extended usage. These functionalities
                collectively enhance text processing efficiency, catering to
                users seeking streamlined text editing tools within a single,
                accessible platform.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
