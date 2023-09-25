import React, { useEffect, useState , useRef } from 'react'
import './Desktop.css'
import Doc from '../Doc/Doc'
import { format } from 'date-fns';
import Skills from '../Windows/Skills/Skills'
import Jobs from '../Windows/Jobs/Jobs';
import Dev from '../Windows/Dev/Dev';
import Links from '../Windows/Links/Links';
import Profile from '../Windows/Profile/Profile';
import Msg from '../Windows/Msg/Msg';

var Desktop = () => {

   var [time, settime] = useState(new Date())


   var [profileOpen, setprofileOpen] = useState(false);
   var [jobOpen, setjobOpen] = useState(false);
   var [devOpen, setdevOpen] = useState(false);
   var [skillOpen, setskillOpen] = useState(false);
   var [msgOpen, setmsgOpen] = useState(false);
   var [linksOpen, setlinksOpen] = useState(false);


   var canvasRef = useRef(null);
  var stars = [];

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


   useEffect(() => {

    setInterval(() => {
      settime(new Date())
    }, 100);
    var canvas = canvasRef.current;
    var ctx = canvas.getContext('2d');
    var numStars = 400;
    var stars=[];

    var width = window.innerWidth;
    var height = window.innerHeight;

    var resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars=[]
      for (let i = 0; i < numStars; i++) {
        var x = Math.random() * canvas.width ;
        var y = Math.random() * canvas.height ;
        var z = Math.random() * canvas.width ;
        
        var angle = calculateAngle(x,y,canvas.width/2,canvas.width/2);
        var radius = 1
        var d =0;
        var dd = Math.random() *10;
        stars.push({ x, y, z, radius,angle,d,dd });
      }
      update()
    };

    function calculateAngle(x1, y1, x2, y2) {
      return Math.atan2(y2 - y1, x2 - x1);      
    }

    // Initialize canvas size
    resizeCanvas();

    for (let i = 0; i < numStars; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var z = Math.random() * canvas.width;
      
      var angle = calculateAngle(x,y,canvas.width/2,canvas.height/2);
      var radius = 1
      var d =0;
      var dd = Math.random() *10;
      stars.push({ x, y, z, radius,angle,d,dd });
    }

    // Update and draw the starfield with depth
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numStars; i++) {
        var star = stars[i];
        star.z -= 1; // Adjust the speed of movement towards the viewer
        if (star.d>width/2) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
          star.z = Math.random() * width;
          
          star.angle = calculateAngle(star.x,star.y,width/2,height/2);
          star.radius = 1
          star.d =0;
          star.dd = Math.random() *10;
        }

        var scale = width / (star.z + 1); // Adjust the scale based on depth
        var x = star.x-(star.d*Math.cos(star.angle))
        var y = star.y-(star.d*Math.sin(star.angle))
        star.d+=star.dd;
        var radius = star.radius+(star.d/width)*4;

        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(update);
    }

    update();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      cancelAnimationFrame(update);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div id='desktop-body'  > 
    <div className="desktop_text">
    <canvas  id="canvas" ref={canvasRef} />;
      <div>
        <h1>Mainak Deb</h1>
        <p>Software Engineer</p>
      </div>
      
    </div>




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
