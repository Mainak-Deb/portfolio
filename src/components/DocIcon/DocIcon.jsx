import React from 'react'
import './DocIcon.css'

const DocIcon = (props) => {
  return (
    <>
    <div className='docicon'>
        {props.children}
    </div>
    </>
  )
}

export default DocIcon