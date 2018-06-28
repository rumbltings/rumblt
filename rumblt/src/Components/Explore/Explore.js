import React, {Component} from 'react';
import MainHeader from '../Headers/Main Header/MainHeader'
import "../Explore/Explore.css"


export default class Explore extends Component{
    constructor(){
        super()
        this.state={
            currentUser:{
                
            }
        }

    }

    componentDidMount(){
        document.body.background = '#36465d';
    }

    render(){
        return(
            <div id="exploremain">
                <header>
                    <MainHeader/>
                </header>
                Explore
            </div>
        )
    }
}