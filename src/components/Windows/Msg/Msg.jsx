import React, { useState, useEffect } from "react";
import "./Msg.css";
import WindowPane from "../WindowPane/WindowPane";


const Msg = ({open,closeWindow}) => {
  return (
    <WindowPane open={open}  name={"msg"} closeWindow={closeWindow}>
        <div className="msg-section">Messege</div>
    </WindowPane>
  );
};

export default Msg;
