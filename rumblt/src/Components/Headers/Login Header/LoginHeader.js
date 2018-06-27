import React, {Component} from 'react';
import './LoginHeader.css'
import compass from './icons/compass.svg'
import home from './icons/home.svg';
import message from './icons/message.svg';
import profile from './icons/profile.svg';
import edit from './icons/edit.svg';
import logo from './icons/logo.svg';



export default class LoginHeader extends Component{
    constructor(){
        super()

    }

    render(){
        return(
            <div id='navBar'>
                <div id='logoContainer'>
                    <img id='logo' src={logo} alt=""/>
                </div>
                <div id='iconContainer'>
               <img id='icon' src={home} alt=""/>
               <img id='icon' src={compass} alt=""/>
               <img id='icon' src={message} alt=""/>
               <img id='icon' src={profile} alt=""/>
               <img id='edit' src={edit} alt=""/>
                </div>
            </div>
        )
    }
}