import React, {useState, useEffect} from 'react'
import fb from "../images/fb.png"
import twitter from "../images/twitter.png"
import linkedIn from "../images/linkedin.png"
import "../styles/DivRight.css"
import NavBar from "../components/NavBar.js"
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import QueryGetData from './Queries'

const styles = [{backgroundImage: `url(${image1})`}, {backgroundImage: `url(${image2})`}];

const DivRight = () => {

  const [state, setState] = useState({
    currStyle: {backgroundImage: `url(${image1})`},
    });

  const changeBackground = () => {
    if(state.currStyle === styles[0]){
      setState({
        currStyle: styles[1]
      })
    } else {
      setState({
        currStyle: styles[0]
      })
    }
  }

  useEffect(()=>{
    setTimeout(changeBackground, 2000)
  })

  const text = QueryGetData()
  
  return (
      
    <div id="div" className="divRight" style={state.currStyle}> 
      <h3>{text[0]}</h3>
      <p>{text[1]}</p>

      <NavBar/>

      <nav className="links">
          <a href="https://facebook.com"><img src={fb} alt="text"/></a>
          <a href="https://linkedin.com"><img src={linkedIn} alt="text"/></a>
          <a href="https://twitter.com"><img src={twitter} alt="text"/></a>
      </nav>
    </div>
)
}

export default DivRight;