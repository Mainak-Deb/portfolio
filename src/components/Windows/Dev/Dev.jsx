import React, { useState, useEffect } from "react";
import "./Dev.css";
import WindowPane from "../WindowPane/WindowPane";


const Dev = ({open,closeWindow}) => {
  return (
    <WindowPane open={open}  name={"dev"} closeWindow={closeWindow}>
        <div className="dev-section">My projects</div>
    </WindowPane>
  );
};

export default Dev;
