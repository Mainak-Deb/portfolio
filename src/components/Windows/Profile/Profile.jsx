import React, { useState, useEffect } from "react";
import "./Profile.css";
import WindowPane from "../WindowPane/WindowPane";


const Profile = ({open,closeWindow}) => {
  return (
    <WindowPane open={open}  name={"profile"} closeWindow={closeWindow}>
        <div className="profile-section">profile</div>
    </WindowPane>
  );
};

export default Profile;
