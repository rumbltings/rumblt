import React, {Component} from 'react';
import axios from 'axios'
import LoginHeader from '../Headers/Login Header/LoginHeader';
import rumblt from '../Headers/Login Header/icons/rumblt.svg';
import './Login.css'
import {Link} from 'react-router-dom';
import LoginBoxes from './LoginBoxes';


export default class Login extends Component{
    constructor(){
        super()
        this.state={
            image: '',
            loginForm: false
        }
        this.toggleLoginForm = this.toggleLoginForm.bind(this);
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

    toggleLoginForm () {
        this.setState({loginForm: !this.state.loginForm});
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

            {this.state.loginForm ?
            <LoginBoxes />
            :
            <div>
            <button id="loginbutton" onClick={this.toggleLoginForm}>
                <div>
                    Log In 
                </div>
            </button>
                <div id="getstarted">
                    Get Started
                </div>
                </div>
            }

                </div>

                </div>
            </div>
        )
    }
}