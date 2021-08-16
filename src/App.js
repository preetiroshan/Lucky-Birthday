import "./styles.css";
import bg from "./images/birthday.svg";
import { useState } from "react";
import Modal from "./Modal";
import Footer from "./Footer";
export default function App() {
  const [date, setDate] = useState("");
  const [luckyNum, setLuckyNum] = useState("");
  const [isLucky, setIsLucky] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleCheck = () => {
    if (date && luckyNum) {
      //Here we replace all items in date string which are not integers, and split the resulting string to get individual digits in an array.
      const dateNum = date.replace(/\D+/g, "").split("");
      let sum = 0;
      dateNum.forEach((num) => {
        sum = sum + parseInt(num, 10);
      });
      setIsLucky(sum % luckyNum === 0 ? true : false);
    }
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <div
        className="header"
        style={{
          backgroundImage: `url(${bg}), linear-gradient(#ffffff, #eacaca)`
        }}
      >
        <h1>Is Your Birthday Lucky?</h1>
        <h2>Let's find out!</h2>
        <label>Enter your date of birth</label>
        <br />
        <input
          className="input-field"
          placeholder="Your birthday here"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label>Enter your lucky number</label>
        <br />
        <input
          className="input-field"
          type="number"
          value={luckyNum}
          onChange={(e) => setLuckyNum(e.target.value)}
        />
        <br />
        <button className="btn" onClick={handleCheck}>
          Check
        </button>
      </div>
      <Modal
        isLucky={isLucky}
        show={showModal}
        setShow={setShowModal}
        onClose={onClose}
        isInvalid={!date || !luckyNum}
      />
      <Footer />
    </div>
  );
}
