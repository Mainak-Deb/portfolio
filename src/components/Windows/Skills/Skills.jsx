import React, { useState, useEffect } from "react";
import "./Skills.css";
import WindowPane from "../WindowPane/WindowPane";


const Skills = ({open,closeWindow}) => {
  return (
    <WindowPane open={open} name={"skill"} closeWindow={closeWindow}>
        <div className="skills-section">Skills</div>
    </WindowPane>
  );
};

export default Skills;
