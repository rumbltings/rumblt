import React, {Component} from 'react';
<<<<<<< HEAD
import axios from 'axios';
import MainHeader from './../Headers/Main Header/MainHeader';
import reply from './icons/reply.svg';
import reblog from './icons/reblog.svg';
import love from './icons/love.svg';
import './Explore.css';
=======
import MainHeader from '../Headers/Main Header/MainHeader'
import "../Explore/Explore.css"
>>>>>>> master


export default class Explore extends Component{
    constructor(){
<<<<<<< HEAD
        super();
=======
        super()
        this.state={
            isExploreCurrent: false
        }
>>>>>>> master

      this.state = {
        tiles: [{
          id: 1,
          profile_img: './temp_images/1.jpg',
          username: 'catto',
          post_img: './temp_images/1q.jpg',
          followers_count: 34
        }]
      }
    }

    componentDidMount(){
        document.body.background = '#36465d';
        this.setState({isExploreCurrent: true})
    }
    
    componentWillUnmount(){
        this.setState({isExploreCurrent: false})
    }
    

    render(){
        return(
<<<<<<< HEAD
            <div>
              Explore
              <MainHeader />
              <section className='subheader'>
                <p className='text'>Text</p>
                <p className='photos'>Photos</p>
                <p className='trending'>Trending</p>
                <p className='staff_picks'>Staff Picks</p>
              </section>
              <section className='below_headers'>
                <div className='placeholder_for_chat'>PLACEHOLDER FOR CHAT</div>
                <div className='tiles'>
                  {this.state.tiles.map( obj => {
                    return (
                      <div key={obj.id} className='individual_tile'>
                        <div className="tile_header">
                          <img className='blogger_pic' src={obj.profile_img} alt='Blogger Profile Pic' />
                          <p className='blogger_username'>{obj.username}</p>
                          <p className='follow_blogger'>Follow</p>
                        </div>
                        <img className='blog_post_image' src={obj.post_img} alt='Blog Post' />
                        <div className='tile_footer'>
                          <p className='number_of_followers'>{obj.followers_count}</p>
                          <div className='tile_actions_container'>
                            <img className='tile_action_reply' src={reply} alt='Reply Icon'/>
                            <img className='tile_action_reblog' src={reblog} alt='Reblog Icon'/>
                            <img className='tile_action_love' src={love} alt='Love Icon'/>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
=======
            <div id="exploremain">
                <header>
                    <MainHeader isExploreCurrent={this.state.isExploreCurrent}/>
                </header>
                Explore
>>>>>>> master
            </div>
        )
    }
}