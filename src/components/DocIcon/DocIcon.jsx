import React, { useState } from 'react'
import './DocIcon.css'

const DocIcon = (props) => {

  function clickEvent(){
      props.openWindow(props.name)
  }


  return (
    <>
    <div className='docicon' onClick={clickEvent} >
        {props.children}
    </div>
    </>
  )
}

export default DocIcon