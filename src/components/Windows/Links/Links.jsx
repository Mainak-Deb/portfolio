import React, { useState, useEffect } from "react";
import "./Links.css";
import WindowPane from "../WindowPane/WindowPane";


const Links = ({open,closeWindow}) => {
  return (
    <WindowPane open={open}  name={"links"} closeWindow={closeWindow}>
        <div className="links-section">Social Links</div>
    </WindowPane>
  );
};

export default Links;
