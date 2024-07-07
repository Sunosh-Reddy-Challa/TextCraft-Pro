import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case !!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case !!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the above text to the clipboard !!", "success");
    document.getSelection().removeAllRanges();
  };

  const handleClear = () => {
    //let text = document.getElementById("exampleFormControlTextarea1");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared !!", "success");
  };

  const handleWhitespaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Whitespaces have been Cleared !!", "success");
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="my-3 ">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "grey",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleCopy}
        >
          CopyText
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleClear}
        >
          ClearText
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleWhitespaces}
        >
          Remove Whitespaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Average number of Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
