import React, { useState, useEffect } from "react";
import "./Links.css";
import WindowPane from "../WindowPane/WindowPane";
import callme from '../../../images/portfolio-img/callme.png'
import LinkSection from "./LinkSection";
import { AiOutlineGithub ,AiOutlineInstagram,AiOutlineTwitter,AiOutlineWhatsApp} from "react-icons/ai";
import { CiFacebook,CiLinkedin } from "react-icons/ci";


const Links = ({open,closeWindow}) => {
  const linkStyle = {
    color: 'white',
    width:  '100%',
    height:'100%',
  };
  return (
    <WindowPane open={open}  name={"links"} closeWindow={closeWindow}>
        <div className="links-section">
          <div className="topicons">
            <img src={callme} className="callme" alt="" />
            <div className="iconsection">
              <div><CiFacebook style={linkStyle} /></div>
              <div><AiOutlineGithub style={linkStyle} /></div>
              <div><AiOutlineInstagram style={linkStyle} /></div>
              <div><AiOutlineTwitter style={linkStyle} /></div>
              <div><AiOutlineWhatsApp style={linkStyle} /></div>
              <div><CiLinkedin style={linkStyle} /></div>
            </div>
          </div>
         <div className="linkdivs">
           <LinkSection><CiFacebook style={linkStyle} /></LinkSection>
           <LinkSection><AiOutlineGithub style={linkStyle} /></LinkSection>
           <LinkSection><AiOutlineInstagram style={linkStyle} /></LinkSection>
           <LinkSection><AiOutlineWhatsApp style={linkStyle} /></LinkSection>
           <LinkSection><CiLinkedin style={linkStyle} /></LinkSection>
         </div>
        </div>
    </WindowPane>
  );
};

export default Links;
