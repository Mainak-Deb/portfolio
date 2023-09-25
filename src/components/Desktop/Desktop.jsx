import React, { useEffect, useState } from 'react'
import './Desktop.css'
import Doc from '../Doc/Doc'
import { format } from 'date-fns';
import Skills from '../Windows/Skills/Skills'
import Jobs from '../Windows/Jobs/Jobs';
import Dev from '../Windows/Dev/Dev';
import Links from '../Windows/Links/Links';
import Profile from '../Windows/Profile/Profile';
import Msg from '../Windows/Msg/Msg';

const Desktop = () => {

   const [time, settime] = useState(new Date())


   const [profileOpen, setprofileOpen] = useState(false);
   const [jobOpen, setjobOpen] = useState(false);
   const [devOpen, setdevOpen] = useState(false);
   const [skillOpen, setskillOpen] = useState(false);
   const [msgOpen, setmsgOpen] = useState(false);
   const [linksOpen, setlinksOpen] = useState(false);

   function closeAll(){
      setprofileOpen(false);
      setjobOpen(false);
      setdevOpen(false);
      setskillOpen(false);
      setmsgOpen(false);
      setlinksOpen(false);
   }

   function openWindow(name){
    closeAll()
    console.log("openWindow",name);
    if(name==="profile"){setprofileOpen(true);}
    if(name==="job"){setjobOpen(true);}
    if(name==="dev"){setdevOpen(true);}
    if(name==="skill"){setskillOpen(true);}
    if(name==="msg"){setmsgOpen(true);}
    if(name==="links"){setlinksOpen(true);}
   }

   function closeWindow(name){
    console.log("closeWindow",name);
    if(name==="profile"){setprofileOpen(false);}
    if(name==="job"){setjobOpen(false);}
    if(name==="dev"){setdevOpen(false);}
    if(name==="skill"){setskillOpen(false);}
    if(name==="msg"){setmsgOpen(false);}
    if(name==="links"){setlinksOpen(false);}
   }


   useEffect(()=>{
      setInterval(() => {
        settime(new Date())
      }, 1000);
   })

  return (
    <div id='desktop-body'  > 
    


    <div className="top">
      <span>{format(time, 'dd MMM yyyy')}</span>
      <span>{format(time, 'HH:mm:ss')}</span>
      <span>{format(time, 'EEEE')}</span>
    </div>   
    <div className="section-for-windows"> 
      <Skills  open={skillOpen}  closeWindow={closeWindow} />
      <Jobs open={jobOpen} closeWindow={closeWindow}/>
      <Dev open={devOpen} closeWindow={closeWindow}/>
      <Links open={linksOpen} closeWindow={closeWindow}/>
      <Msg open={msgOpen} closeWindow={closeWindow}/>
      <Profile open={profileOpen} closeWindow={closeWindow}/>
    </div>
      <Doc  openWindow={openWindow}  closeWindow={closeWindow} ></Doc>
    </div>
  )
}

export default Desktop;
