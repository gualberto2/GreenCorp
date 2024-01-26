import React, { useState, useEffect } from "react";

export default function About() {
  const [boxes, setBoxes] = useState([1, 2, 3]); // Array of boxes, you can add more if needed

  useEffect(() => {
    // Set a timeout for each box to start its animation
    const timers = boxes.map(
      (box, index) =>
        setTimeout(() => {
          // Add a class to start the animation
          document.getElementById(`box${box}`).classList.add("animate");
        }, index * 1000) // Adjust time for each box's delay
    );

    // Cleanup timeouts on component unmount
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [boxes]);

  return (
    <></>
    // <div id="animationWrapper">
    //   {boxes.map((box) => (
    //     <div key={box} className="box" id={`box${box}`}></div>
    //   ))}
    // </div>
    // Above is the green box animations
  );
}
