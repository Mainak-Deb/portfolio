import React from 'react'

const LinkSection = (props) => {
  return (
    <div className='linkpart'>
        <div className='linkicon' >
          {props.children}
        </div>
        <div className='linkname' >
            <a href="">Mainak-Deb</a>
        </div>
    </div>
  )
}

export default LinkSection