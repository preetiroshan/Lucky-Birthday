import React from "react";
import "./styles.css";
export default function Modal({ onClose, isLucky, show, isInvalid }) {
  return show ? (
    <div
      onClick={onClose}
      className={"modal-container " + show ? "show" : ""}
      style={{
        position: "fixed",
        top: "20%",
        left: "5%",
        right: "5%",
        backgroundColor: "#f7fffe",
        textAlign: "center",
        padding: "2rem",
        zIndex: "3"
      }}
    >
      <div className="modal-content">
        {isInvalid ? (
          <>
            Please enter your date of birth as well as your lucky number first!
          </>
        ) : (
          <>
            {`${isLucky ? "YAYY!" : "NOO :("} Your birthday is ${
              isLucky ? "lucky!!" : "not lucky"
            }`}
            <h2>{isLucky ? "😎" : "😪"}</h2>
          </>
        )}
        <br />
        <button className="btn">Close</button>
      </div>
    </div>
  ) : null;
}
