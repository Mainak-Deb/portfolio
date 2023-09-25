import React, { useState, useEffect } from "react";
import "./Jobs.css";
import WindowPane from "../WindowPane/WindowPane";


const Jobs = ({open,closeWindow}) => {
  return (
    <WindowPane open={open}  name={"job"} closeWindow={closeWindow}>
        <div className="jobs-section">Jobs</div>
    </WindowPane>
  );
};

export default Jobs;
