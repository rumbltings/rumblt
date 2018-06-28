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
import aHome from './icons/homeActive.svg'
import aExplore from './icons/aExplore.svg'
import aChat from './icons/aChat.svg'
import aProfile from './icons/aProfile.svg'
import Modal from 'react-modal';


const customStyles = {
    content : {
    //   top                   : '50%',
    //   left                  : '50%',
    //   right                 : 'auto',
    //   bottom                : 'auto',
    //   marginRight           : '-50%',
    //   transform             : 'translate(-50%, -50%)'
    width: '280px',
    height: '500px',
    left: '75%'
    }
  };



export default class MainHeader extends Component{
    constructor(){
        super()
        this.state={
            chatActive: false,
            profileActive: false
           
        }
    }

    hideAll(){
        this.setState({
            chatActive: false,
            profileActive: false
        })
    }
    

    render(){
        return(
            <div id='navBar'>
                <div id='logoContainer'>

                    <Link to='/explore'>
                        <img id='logoh' src={logo} alt="Link to dashboard"/>
                    </Link>

                    <div id="search">
                        <div id="searchbar">
                            <img className='glass' src={search} alt="Search icon"/>
                                Search rumblt
                        </div>
                    </div>

                </div>

                <div id='iconContainer'>

                    <Link to='/dashboard'>
                        <img id='iconh' src={this.props.isDashCurrent ? aHome : home} alt=""  />
                    </Link>

                    <Link to='/explore'>
                        <img id='iconh' src={this.props.isExploreCurrent? aExplore : compass}   alt=""/>
                    </Link>

                    <img id='iconh' src={this.state.chatActive ? aChat : message} alt="" onClick={()=>
                    {this.setState({chatActive: !this.state.chatActive, profileActive: false})}}/>

                        <Modal
          isOpen={this.state.chatActive}
          onRequestClose={this.chatActive == false}
          contentLabel="Chat Modal"
          style={customStyles}
        >

          <div id='modalDiv'>
              I am a modal
          </div>
        </Modal>


                    <img id='iconh' src={this.state.profileActive ? aProfile : profile} alt=""
                    onClick={()=>{this.setState({profileActive: !this.state.profileActive, chatActive: false})}}
                    />

                    <img id='edit' src={edit} alt=""/>

                </div>

            </div>
        )
    }
}