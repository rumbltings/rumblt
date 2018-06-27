import React, {Component} from 'react';
import './MainHeader.css'
import compass from './icons/compass.svg'
import home from './icons/home.svg';
import message from './icons/message.svg';
import profile from './icons/profile.svg';
import edit from './icons/edit.svg';
import logo from './icons/logo.svg';
import search from './icons/search.svg';



export default class MainHeader extends Component{
    constructor(){
        super()

    }

    render(){
        return(
            <div id='navBar'>
                <div id='logoContainer'>
                    <img id='logo' src={logo} alt=""/>
                    <div id="search">
                    <div id="searchbar">
                    <img className='glass' src={search} alt=""/>
                    Search rumblt
                    </div>
                    </div>
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