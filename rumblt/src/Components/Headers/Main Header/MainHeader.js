import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/dashboard"><img id='logo' src={logo} alt="Link to dashboard"/></Link>
                    <div id="search">
                    <div id="searchbar">
                    <img className='glass' src={search} alt="Search icon"/>
                    Search rumblt
                    </div>
                    </div>
                </div>
                <div id='iconContainer'>
                <Link to='/dashboard'><img id='icon' src={home} alt=""/></Link>
                <Link to='/explore'><img id='icon' src={compass} alt=""/></Link>
                <img id='icon' src={message} alt=""/>
                <Link to='/profile/:username'><img id='icon' src={profile} alt=""/></Link>
                <img id='edit' src={edit} alt=""/>
                </div>
            </div>
        )
    }
}