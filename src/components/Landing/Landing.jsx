import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";

const Landing = () => {
  const [code, setcode] = useState("");
  const opref = useRef(null);

  useEffect(() => {
    var opacity = 0;
    var scale = 400;
    var d=4;
    const opelement = opref.current;

    const intervalId1 = setInterval(() => {
      var randomChar = "";
      opelement.style.transform = "scale(" + String(scale) + ")";
      for (let i = 0; i < 5000; i++) {
        randomChar += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }
      opacity = Math.min(opacity)
      scale = Math.max(1, scale - d);
      d=Math.max(1,d-0.01)

      setcode((prevText) => randomChar);
    }, 50);

    return () => {
      clearInterval(intervalId1);
    };


  }, []);
  return (
    <div id="main-landing">
      <div id="codespace">{code}</div>
      <div id="blurcode"></div>
      <div id="nameplate" ref={opref}>
            Mainak Deb
      </div>
    </div>
  );
};

export default Landing;
