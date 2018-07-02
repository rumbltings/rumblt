import React, {Component} from 'react';
import axios from 'axios'
import LoginHeader from '../Headers/Login Header/LoginHeader';
import rumblt from '../Headers/Login Header/icons/rumblt.svg';
import './Login.css'

// eslint-disable-next-line
import {Link} from 'react-router-dom';
import LoginBoxes from './LoginBoxes';


export default class Login extends Component{
    constructor(){
        super()
        this.state={
            image: '',
            displaySignUp: false,
            displayLogIn: false
        }

    }

    componentDidMount(){
        this.getRandomImage();
    }

    getRandomImage(){
        var queries = ['shibe', 'doge', 'meme', 'art', 'goals', 'anime', 'cats', 'funny', 'tumblr', 'disney', 'food', 'coffee', 'animals'];

        var query= queries[Math.floor(Math.random()*queries.length)]

        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=lQiHuWLfjlMKb4krrEQar6RKMizcigD3&tag=${query}&rating=PG`).then(res=>{
            console.log(res.data.data.image_url)
            this.setState({image:res.data.data.image_url})
            document.body.background = this.state.image;
            document.body.style.backgroundSize = "cover";
        })
    }

    render(){
        return(
            <div id="loginMain">


                <header>
                <LoginHeader/>
                </header>

                <div className='center'>

                <div id="mainsignin">

                    <div id="fulllogo">
                        <img src={rumblt} alt=""/>
                    </div>

                <div id="subtitle">

                    <div className="subtop">
                        Come for what you discover.
                    </div>

                    <div className="subbottom">
                        Stay for what you love.
                    </div>

                </div>

                <div id={this.state.displaySignUp ? 'signupinfo' : 'hideLogin'}>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Username'/>
                </div>

               
                <div id={this.state.displayLogIn || this.state.displaySignUp ? "hideButton" : "getstarted"} onClick={()=>this.setState({displaySignUp: true})}>
                   {this.state.displaySignUp ? 
                    'Sign Up' 
                    : 'Get Started'}
                </div>

                <Link to='/dashboard' id={this.state.displaySignUp ? "getstarted" : "hideButton"}>
                Sign Up
                </Link>
                

                  <div id={this.state.displayLogIn ? 'logininfo' : 'hideLogin'}>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                </div>


                
                <div id={this.state.displaySignUp || this.state.displayLogIn ? "hideButton" : "loginbutton"} onClick={()=>this.setState({displayLogIn: true})}>
                    Log In
                </div>
               
                <Link to='/dashboard' id={this.state.displayLogIn ? "loginbutton" : "hideButton"}>
                Log In
                </Link>

                </div>

                </div>
            </div>
        )
    }
}