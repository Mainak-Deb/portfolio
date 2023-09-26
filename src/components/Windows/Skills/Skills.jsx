import React, { useState, useEffect } from "react";
import "./Skills.css";
import WindowPane from "../WindowPane/WindowPane";

const Skills = ({ open, closeWindow }) => {
  return (
    <WindowPane open={open} name={"skill"} closeWindow={closeWindow}>
      <div className="skills-section">
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">cd ./languages</span>
        </div>
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">ls -a</span>
        </div>
        <div className="skill-container">
          <div className="skill-names">.</div>
          <div className="skill-names">..</div>
          <div className="skill-names">Python</div>
          <div className="skill-names">C</div>
          <div className="skill-names">JavaScript</div>
          <div className="skill-names">Java</div>
          <div className="skill-names">TypeScript</div>
          <div className="skill-names">Html</div>
          <div className="skill-names">css</div>
          <div className="skill-names">SQL</div>
        </div>
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">cd ..</span>
        </div>
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">cd ./skills</span>
        </div>
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">ls -a</span>
        </div>
        <div className="skill-container">
          <div className="skill-names">.</div>
          <div className="skill-names">..</div>
          <div className="skill-names">Node.js</div>
          <div className="skill-names">React</div>
          <div className="skill-names">Redux</div>
          <div className="skill-names">Next.js</div>
          <div className="skill-names">Struts</div>
          <div className="skill-names">OracleDB</div>
          <div className="skill-names">MySql</div>
          <div className="skill-names">Tailwind css</div>
          <div className="skill-names">p5.js</div>
          <div className="skill-names">Pygame</div>
          <div className="skill-names">Git/Github</div>
          <div className="skill-names">Django</div>
          <div className="skill-names">Express</div>
        </div>
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">cd ..</span>
        </div>
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">cd ./knownOs</span>
        </div>
        <div>
          <span className="macid">Mainak-MacBook-Air :~</span>
          <span className="maccode">ls -a</span>
        </div>
        <div className="skill-container">
          <div className="skill-names">.</div>
          <div className="skill-names">..</div>
          <div className="skill-names">Windows</div>
          <div className="skill-names">MacOs</div>
          <div className="skill-names">Ubuntu</div>
        </div>
      </div>
    </WindowPane>
  );
};

export default Skills;
