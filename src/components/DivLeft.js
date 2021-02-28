
import React from 'react'
import logo from "../images/logo.png"
import playStore from "../images/googleplay.png"
import appStore from "../images/appStore.png"
import "../styles/DivLeft.css"
import QueryGetData from "./Queries"


const DivLeft = () => {

    const text = QueryGetData()
    
    return (
        <div className="divLeft">
            <img className="logo" src={logo} alt="text"/>
            <p className="leftBigText">{text[0]}</p>
            <p className="leftSmallText">{text[1]}</p>
            
            <a id="appImg" href="http://www.google.com"><img  src={appStore} alt="text"/></a>
            <a id="playImg" href="http://www.google.com"><img  src={playStore} alt="text"/></a>
      
        </div>
    )
}

export default DivLeft;