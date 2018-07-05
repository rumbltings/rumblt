
import React, {Component} from 'react';
import MainHeader from '../Headers/Main Header/MainHeader'
import '../Headers/Login Header/LoginHeader.css'
import './Dashboard.css'
import DashFeed from './DashFeed/DashFeed'
import  {connect} from 'react-redux';
import ChatUsers from './ChatUsers';
import axios from 'axios';
import RandomPost from './RandomPost';
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
import TextPost from './Post/TextPost';


export class Dashboard extends Component{

        constructor(){
            super();
            this.state={
                currentuser: [],
                posts: [],
                toggleTextPost: false,
                textInput: '',
                isDashCurrent: false
        }
        this.getLoggedUser = this.getLoggedUser.bind(this);
        this.toggleTextInput = this.toggleTextInput.bind(this);
    }

    getAllPosts(){
        axios.get('/api/posts/').then((posts)=> {
            this.setState({posts:posts.data})
        })
    }

   

    getLoggedUser () {
        if (this.props.authUser === null) {
            window.location.href = '/#/';
        } else {
            axios.get(`/api/users/${this.props.authUser.uid}`).then((user) => {
                console.log('current user: ', user);
                this.setState({currentuser:user.data[0]})
            })
        }
    }

    getAllUsers() {
        axios.get('/api/users/').then( (users) => {
        })
    }

    componentWillMount(){
        this.getLoggedUser();
        console.log('Very Props, WOW',this.props)
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

    toggleTextInput () {
        this.setState({toggleTextPost: !this.state.toggleTextPost})
    }

    render(){
     
        if(this.props.authUser !== null) {
        return(
            
            <div id='maindash'>
                <div id='headerdiv'>
                
                    <MainHeader isDashCurrent={this.state.isDashCurrent} currentuser={this.state.currentuser}/>
                    
                    {/* {this.props.authUser.email} */}
                    
                </div>
                <div id="maincontent">
                <div id="dashleft">

                <div className="dashfeedtop">

                    <div className="profileimage">
                    {/* <img src={this.state.dummyUser.profileImage} alt=""/> */}
                    <img className="profileimage" src={this.state.currentuser.userimg} alt=""/>
                    </div>

                <div id="createnew">

                    <div id="text" onClick={this.toggleTextInput}>
                    <InsertText />
                    <div className="atitle">
                    Text
                    </div>
                    </div>

                    {this.state.toggleTextPost ? 
                    <TextPost/>
                    :
                    null
                    }
                
                    
                    
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

                    {/* <div className="feed" key={posts}> */}
                    {this.state.posts.map((post, i) =>{
                        return (
                            <div className="feed" key={post + i}>
                                <DashFeed {...post} />
                            </div>
                        )
                    })}
                    {/* </div> */}
                </div>

                <div id="dashright">
                    <div id="chatheader">
                    RECOMMENDED CHAT
                    </div>
                    <div id='dashchat'>
                    <div id='chatusercontainer'>
                        <ChatUsers/>
                    </div>
                    </div>
                    Explore all of Rumblt

                    <div className="randompost">
                    <RandomPost/>
                    </div>
                </div>


                </div>
            </div>
        )}else {
            return(
            window.location.href = '/#/'
            )
        }
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;

export default connect(mapStateToProps)(Dashboard);