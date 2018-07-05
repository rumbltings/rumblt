import React, {Component} from 'react';
import axios from 'axios';
import './ChatUsers.css'
import AddChat from './Icons/AddChat'

export default class ChatUsers extends Component{
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
    axios.get('/api/users').then(res=>{
        this.setState({users: res.data})
        console.log(res.data)
    })
}

    render(){
        return(
            <div>
                {this.state.users.map(user=>{
                    return(
                        <div id='cu'>
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