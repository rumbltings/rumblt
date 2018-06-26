import React, {Component} from 'react';
import LoginHeader from '../Headers/Login Header/LoginHeader'

import './Login.css'

export default class Login extends Component{
    constructor(){
        super()

    }

    render(){
        return(
            <div id="loginMain">

                <header>
                <LoginHeader/>
                </header>

                LOGIN
            </div>
        )
    }
}