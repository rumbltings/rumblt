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
import {compose} from 'recompose';
import withAuthentication from '../../withAuthentication';
import withAuthorization from '../../withAuthorization';
import SignOutButton from '../Login/signOut';

export class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            posts: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            isDashCurrent: false
        }

    }

    componentDidMount(){
        console.log(this.props.authUser);
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
                </div>
                <div id="maincontent">
                <div id="dashleft">

                <div className="dashfeedtop">

                    <div className="profileimage">
                    image
                    </div>
                    <div className="createnew">
                    create new bar goes here
                    <h3>{this.props.authUser.email}</h3>
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
                    log the fuck in bitch
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