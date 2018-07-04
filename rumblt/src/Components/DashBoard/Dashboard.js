//Header
//Footer
//Feed
//Chat Display
//Random Post
import React, {Component} from 'react';
import MainHeader from '../Headers/Main Header/MainHeader'
import '../Headers/Login Header/LoginHeader.css'
import './Dashboard.css'
import DashFeed from './DashFeed/DashFeed'
import  {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import axios from 'axios';
// import {compose} from 'recompose';
// import withAuthentication from '../../withAuthentication';
// import withAuthorization from '../../withAuthorization';
import SignOutButton from '../Login/signOut';
import InsertText from './Icons/InsertText'
import InsertQuote from './Icons/InsertQuote'
import InsertPhoto from './Icons/InsertPhoto'
import InsertLink from './Icons/InsertLink';
import InsertChat from './Icons/InsertChat';
import InsertAudio from './Icons/InsertAudio';
import InsertVideo from './Icons/InsertVideo';


export class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            posts: []

        }

    }

    getAllPosts(){
        axios.get('/api/posts/').then((posts)=> {
            // console.log(posts + "I'm your posts bitch")
            this.setState({posts:posts.data})
            console.log(this.state.posts)
        })
    }

    getLoggedUser () {
        axios.get(`/api/users/${this.props.authUser.uid}`).then((user) => {
            console.log('current user: ', user);
        })
    }

    getAllUsers() {
        axios.get('/api/users/').then( (users) => {
            console.log('getallusers returns: ', users);
        })
    }

    componentDidMount(){

        console.log('Auth User', this.props.authUser);
        document.body.background = '#36465d';
        this.setState({isDashCurrent: true})
        this.getLoggedUser();
        this.getAllUsers();
        this.getAllPosts();
    }
    
    componentWillUnmount(){
        this.setState({isDashCurrent: false})
    }

    render(){
        if(this.props.authUser !== null) {
        return(
            
            <div id='maindash'>
                <div id='headerdiv'>
                    <MainHeader isDashCurrent={this.state.isDashCurrent}/>
                    <SignOutButton />
                    {this.props.authUser.email}
                    
                </div>
                <div id="maincontent">
                <div id="dashleft">

                <div className="dashfeedtop">

                    <div className="profileimage">
                    image
                    </div>
                    <div id="createnew">
                    <div id="text">
                    <InsertText/>
                    <div className="atitle">
                    Text
                    </div>
                    </div>

                    <div id="photo">
                    <InsertPhoto/>
                    <div className="atitle b">
                    Photo
                    </div>
                    </div>

                    <div id="quote">
                    <InsertQuote/>
                    <div className="atitle">
                    Quote
                    </div>
                    </div>

                    <div id="addlink">
                    <InsertLink/>
                    <div className="atitle b">
                    Link
                    </div>
                    </div>
                    
                    <div id="addchat">
                    <InsertChat/>
                    <div className="atitle">
                    Chat
                    </div>
                    </div>

                    <div id="addaudio">
                    <InsertAudio/>
                    <div className="atitle b">
                    Audio
                    </div>
                    </div>

                    <div id="addvideo">
                    <InsertVideo/>
                    <div className="atitle">
                    Video
                    </div>
                    </div>

                    </div>
                </div>

                    <div className="feed">
                    {this.state.posts.map(post=>{
                        return (
                            <div key={post}>
                                <DashFeed {...post}/>
                            </div>
                        )
                    })}
                    </div>
                </div>

                <div id="dashright">
                    <div className="chat">
                        Chat goes here
                    </div>

                    <div className="randompost">
                    Random Post Goes HERE
                    </div>
                </div>


                </div>
            </div>
        )}else {
            return (
                <div>
                    <h1>Whoops! Something went wrong</h1>
                    <h3>Please <Link to='/'>try again</Link></h3>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;

export default connect(mapStateToProps)(Dashboard);