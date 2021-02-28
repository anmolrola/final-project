import React, { Component } from 'react'


class NavBar extends Component{

    enableContact = () =>{
        document.getElementsByClassName("popup")[0].style.display = "block"
    }

    render(){
        return (
            <nav className ="navBar">
                <button id="contact">About</button>
                <button id="contact">Blog</button>
                <button id="contact">Careers</button>
                <button id="contact" onClick={this.enableContact}>Contact</button>
            </nav>
        )
    }
}

export default NavBar;