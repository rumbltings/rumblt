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
            posts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            isDashCurrent: false,
            dummyData: [{
                id: 1,
                posterImage: 'https://78.media.tumblr.com/e61a924e988536de900ac6c3a9ef97fa/tumblr_os5r54nmOz1tcslufo1_400.png',
                posterName: 'Poster 1',
                postCaption: 'Hello! This is My Post!',
                postContent: 'https://pics.me.me/i-wish-i-was-a-shibe-3398650.png',
                notes: 123
            },
            {
                id: 2,
                posterImage: 'https://78.media.tumblr.com/6c039a0bb30eddc57524f8d490036da3/tumblr_ofzb7eKvce1ukzs7qo1_500.png',
                posterName: 'Poster 2',
                postCaption: 'Hello! This is My Post!',
                postContent: 'http://www.mypokecard.com/my/galery/p7o782CtWOsk.jpg',
                notes: 0
            },
            {
                id: 3,
                posterImage: 'https://78.media.tumblr.com/3b047b40120348466074a3491ce4fe6c/tumblr_oqtvlgp87H1t4rhclo3_400.png',
                posterName: 'Poster 3',
                postCaption: 'Hello! This is My Post!',
                postContent: 'https://pics.me.me/i-wish-i-was-a-shibe-3398650.png',
                notes: 3798
            },
            {
                id: 4,
                posterImage: 'https://78.media.tumblr.com/670412ed8df88f5978159e86e2333eff/tumblr_p2vwm5d72t1uskm6lo1_500.jpg',
                posterName: 'Poster 4',
                postCaption: 'Hello! This is My Post!',
                postContent: 'http://31.media.tumblr.com/3bd9841af890cda9fcb248719385443e/tumblr_msy3raNtLP1shivooo1_400.gif',
                notes: 10
            }   
        ]

        }

    }

    getLoggedUser () {
        if (!this.props.authUser) {
            window.location.href = '/#/';
        } else {
            axios.get(`/api/users/${this.props.authUser.uid}`).then((user) => {
                console.log('current user: ', user);
            })
        }
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
                    {this.state.dummyData.map(post=>{
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