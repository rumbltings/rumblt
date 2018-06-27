//Header
//Footer
//Feed
//Chat Display
//Random Post
import React, {Component} from 'react';
import MainHeader from '../Headers/Main Header/MainHeader'
import '../Headers/Login Header/LoginHeader.css'

export default class Dashboard extends Component{
    constructor(){
        super()

    }

    render(){
        return(
            <div>
                <div>
                    <MainHeader/>
                </div>
                DASHBOARD
            </div>
        )
    }
}