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
            isDashCurrent: false
        }

    }

    componentDidMount(){
        console.log('Auth User', this.props.authUser);
        document.body.background = '#36465d';
        this.setState({isDashCurrent: true})

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
                                <DashFeed/>
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