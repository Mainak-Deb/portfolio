import React from 'react'
import DocIcon from '../DocIcon/DocIcon'
import './Doc.css';
import {CgProfile} from "react-icons/cg";
import {PiLinkSimpleBold} from "react-icons/pi";
import {GiOfficeChair} from "react-icons/gi";
import {FaTools} from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
import { MdSms } from "react-icons/md";


const Doc = (props) => {

    const profileStyle = {
        color: 'pink',
        width:  '50px',
        height:'50px',
        backgroundColor:'rgb(235, 52, 143)',
        borderRadius:'10px'
      };

      const linkStyle = {
        color: 'rgb(111, 252, 106)',
        width:  '50px',
        height:'50px',
        backgroundColor:'green',
        borderRadius:'10px'
      };

      const devStyle = {
        color: 'rgb(130, 157, 255)',
        width:  '50px',
        height:'50px',
        backgroundColor:'rgb(4, 42, 194)',
        borderRadius:'10px'
      };

      const jobStyle = {
        color: 'rgb(231, 242, 24)',
        width:  '50px',
        height:'50px',
        backgroundColor:'rgb(235, 174, 52)',
        borderRadius:'10px'
      };

      const msgStyle = {
        color: 'rgb(255, 138, 5)',
        width:  '50px',
        height:'50px',
        backgroundColor:'rgb(222, 0, 4)',
        borderRadius:'10px'
      };



      const skillStyle = {
        color: 'white',
        width:  '50px',
        height:'50px',
        backgroundColor:'rgb(51, 51, 51)',
        borderRadius:'10px'
      };
      


  return (
    <div className='doc-container'>
    <div   className='doc'>
        <DocIcon openWindow={props.openWindow}  closeWindow={props.closeWindow} name={"profile"} ><CgProfile style={profileStyle}  /></DocIcon>
        <DocIcon openWindow={props.openWindow}  closeWindow={props.closeWindow} name={"job"}><GiOfficeChair style={jobStyle}/></DocIcon>
        <DocIcon openWindow={props.openWindow}  closeWindow={props.closeWindow}   name={"dev"}><FaTools style={devStyle}/>  </DocIcon>
        <DocIcon openWindow={props.openWindow}  closeWindow={props.closeWindow} name={"skill"} ><AiOutlineCode style={skillStyle}/> </DocIcon>
        <DocIcon openWindow={props.openWindow}  closeWindow={props.closeWindow}  name={"msg"}><MdSms  style={msgStyle} /></DocIcon>
        <DocIcon openWindow={props.openWindow}  closeWindow={props.closeWindow} name={"links"} ><PiLinkSimpleBold style={linkStyle}/></DocIcon>
    </div>
    </div>
  )
}

export default Doc