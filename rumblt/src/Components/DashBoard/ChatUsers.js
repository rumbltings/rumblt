import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './ChatUsers.css'
import AddChat from './Icons/AddChat'

export class ChatUsers extends Component{
    constructor(){
        super()

        this.state={
            users: [],
            randomImages: [
                'https://78.media.tumblr.com/67c26a4b5b2264a4df6210b69a1a860b/tumblr_inline_mqogldh5CK1qz4rgp.png',
                'https://cdn130.picsart.com/235500821118212.png?r1024x1024',
                'http://learning-management.us/wp-content/uploads/chiaki-nanami-icons-peko-icons-tumblr-chiaki-nanami-icons.png',
                'http://static.tumblr.com/926e3d6ebe535e18e1b931e8c1e3b702/lrcgfdi/aQ4oy6wg5/tumblr_static_p42u0m76xb4gk4kgokoskcc4.png'
            ]
        }
    }
componentDidMount(){
    let followersArr = [];
    axios.get(`/api/followers/${this.props.authUser.uid}`).then(res=>{
        let followerIDArray = res.data;
        followerIDArray.map(el =>{
            axios.get(`/api/users/${el.followeduserid}`).then((res) => {
                let follower = res.data[0];
                followersArr.push(follower);
            }).then(() => {
                this.setState({users: followersArr})
            })
        })
    })
}

followUser() {
    axios.post(`/api/newFollower/${this.props.authUser.uid}/:followeduserid`)
}

    render(){
        return(
            <div>
                {this.state.users.map(user=>{
                    let followuserid = user.userid;
                    return(
                        <div id='cu' key={user.id}>
                            <div id="culeft">
                            <div id="chatimage">
                            <img src={this.state.randomImages[Math.floor(Math.random()* this.state.randomImages.length)]} alt=""/>
                            </div>
                            <div id="cutextcontainer">
                            <div id="username">
                            {user.username}
                            </div>
                            <div id="cublogtitle">
                            {user.blogtitle}
                            </div>
                            </div>
                            </div>
                            <div id="curight">
                            <div id="acbutton">
                            <AddChat/>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;
export default connect(mapStateToProps)(ChatUsers);