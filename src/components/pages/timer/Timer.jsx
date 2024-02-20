import React, { useEffect, useState } from "react";
import "./timer.scss";
const Timer = () => {
    const [h,setH]=useState("")
    const [m,setm]=useState("")
    const [s,sets]=useState("")
//   const [time, setTime] = useState("");
//   function formatTime(val) {
//     if (val < 10) {
//       return "0";
//     } else {
//       return "";
//     }
//   }
//   useEffect(() => {
//     const timerid = setInterval(() => trck(), 1000);
//     return function cleanup() {
//       clearInterval(timerid);
//     };
//   }, []);
//   function trck() {
//     const d = new Date();
//     const h = d.getHours();
//     const m = d.getMinutes();
//     const s = d.getSeconds();
//     setTime(
//       formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s
//     );
//   }
//   console.log(time)
  return (
    <div className="timer">
      <div className="timer-container">
        <div className="timer-content">
          <div className="timer-title">
            <h1>
              Here's The Skinny: Plants <br />
              Bring People Joy
            </h1>
          </div>
          <div className="timer-time">
            <div className="hour">
              <span>0 0</span>
            </div>
            <div className="dotbox">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="minuts hour ">
              <span>0 0</span> 
            </div>
            <div className="dotbox">
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="seconds hour">
              <span>0 0</span> 
            </div>
          </div>
          <div className="shopnow">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
