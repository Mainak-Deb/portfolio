import React, { useState, useEffect } from "react";
import "./Links.css";
import WindowPane from "../WindowPane/WindowPane";
import callme from '../../../images/portfolio-img/callme.png'
import LinkSection from "./LinkSection";

const Links = ({open,closeWindow}) => {
  return (
    <WindowPane open={open}  name={"links"} closeWindow={closeWindow}>
        <div className="links-section">
          <div className="topicons">
            <img src={callme} className="callme" alt="" />
            <div className="iconsection">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <LinkSection></LinkSection>
          <LinkSection></LinkSection>
          <LinkSection></LinkSection>
          <LinkSection></LinkSection>
          <LinkSection></LinkSection>
          <LinkSection></LinkSection>
          <LinkSection></LinkSection>
          <LinkSection></LinkSection>
        </div>
    </WindowPane>
  );
};

export default Links;
