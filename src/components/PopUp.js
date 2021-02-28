import React, {useState} from 'react';
import "../styles/PopUp.css"
import fb from "../images/fb.png"
import twitter from "../images/twitter.png"
import linkedIn from "../images/linkedin.png"
import closeButton from "../images/closeButton.svg"
import {useMutation} from '@apollo/client';
import {sendMessage} from './Queries.js';


const PopUp = () =>{

    const disableContact = () =>{
        document.getElementsByClassName("popup")[0].style.display = "none"
    }

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputMsg, setInputMsg] = useState("")

    const [submitData] = useMutation(sendMessage, {
        variables:{
            name: inputName,
            email: inputEmail,
            message: inputMsg
        }
    });

    const HandleSubmit = (event) =>{
        event.preventDefault()
        submitData()
        const temp = document.getElementsByClassName("popup")
        temp[0].style.display = "none"
    }
    
    const HandleNameChange = (event) =>{
        event.preventDefault();
        setInputName(event.target.value);
    }

    const HandleEmailChange = (event) =>{
        event.preventDefault();
        setInputEmail(event.target.value);
    }

    const HandleMsgChange = (event) =>{
        event.preventDefault();
        setInputMsg(event.target.value);
    }


    return (
        <div className="popup">
            <h2 id="contact">Contact</h2>
            <p id="belowContact">Lorem Ipsum is simply dummy text of the printing</p>
            <button id="closeButton" onClick={disableContact}><img src={closeButton} alt="close button"/></button>
            <form onSubmit={HandleSubmit}>
                <div className="inputBars" id="entry1">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name here" onChange={HandleNameChange}/>
                </div>
                <div className="inputBars" id="entry2">
                    <label>E-Mail:</label>
                    <input type="text" name="email" placeholder="Enter your email here" onChange={HandleEmailChange}/>
                </div>
                <div className="inputBars" id="entry3">
                    <label>Message:</label>
                    <input type="text" name="msg" placeholder="Enter your message here" onChange={HandleMsgChange}/>
                </div>
                <div className="submit">
                    <input type="submit"/>
                </div>

                <p id="moreInfo">Need more info? hello@newzera.com</p>
            </form>

            <nav className="links">
                <a href="https://facebook.com"><img src={fb} alt="text"/></a>
                <a href="https://linkedin.com"><img src={linkedIn} alt="text"/></a>
                <a href="https://twitter.com"><img src={twitter} alt="text"/></a>
            </nav>
        </div>
    )
}

export default PopUp;