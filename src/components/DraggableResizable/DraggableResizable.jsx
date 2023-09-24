import React from 'react';
import {Rnd}from 'react-rnd';
import './style.css'


function DraggableResizable() {
  return (
    
    <Rnd
    default={{
      x: 100,
      y: 100,
      width: '80%',
      height: '80%',
    }}
    minWidth={'200px'}
    minHeight={'200px'}
    bounds="window"
  >
   <div className='draggable-resizable-object'>
        this is draggable
   </div>
  </Rnd>
    
  );
}

export default DraggableResizable;
