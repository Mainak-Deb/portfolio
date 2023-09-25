import React, { useEffect, useState } from 'react'
import { Rnd } from "react-rnd";
import './WindowPane.css'

const WindowPane = (props) => {


    const [windowCon, setwindowCon] = useState("80%");


    function closeDiv(){
        console.log("red closing",props.name)
        props.closeWindow(props.name)
    }

    function changeCon(){
        console.log("changeCon",props.name)
    }

    if (props.open) {
       
            return(
                <Rnd default={{x: 100,y: 50,width:"80%",height: "80%" }} minWidth={"200px"}  minHeight={"200px"} bounds="window"> 
                    <div className="windowpane">
                        <div className="toolbar">
                            <button className='closeButton but' onClick={closeDiv}  >.</button>
                            <button className='minimizeButton but' onClick={closeDiv} >.</button>
                            <button className='maximizeButton but' onClick={changeCon}  >.</button>
                            <div className="propname">
                            {props.name}
                            </div>
                        </div>
                        <div className="main-window">
                            {props.children} 
                        </div>
                    </div>
                    
                </Rnd>)
       
        }
    else{ return <></>};
}

export default WindowPane;