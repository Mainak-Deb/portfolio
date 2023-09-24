import React, { useEffect, useState } from 'react'
import './Desktop.css'
import Doc from '../Doc/Doc'
import { format } from 'date-fns';
import DraggableResizable from '../DraggableResizable/DraggableResizable';

const Desktop = () => {

   const [time, settime] = useState(new Date())

   useEffect(()=>{
      setInterval(() => {
        settime(new Date())
      }, 1000);
   })

  return (
    <div id='desktop-body'  > 
   <DraggableResizable/>
    <div className="top">
      <span>{format(time, 'dd MMM yyyy')}</span>
      <span>{format(time, 'HH:mm:ss')}</span>
      <span>{format(time, 'EEEE')}</span>
    </div>   
      <Doc></Doc>
    </div>
  )
}

export default Desktop;
