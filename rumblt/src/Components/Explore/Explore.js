import React, {Component} from 'react';
import axios from 'axios';
import MainHeader from './../Headers/Main Header/MainHeader';
import reply from './icons/reply.svg';
import reblog from './icons/reblog.svg';
import love from './icons/love.svg';
import profile_img from './temp_images/1.jpg';
import post_img from './temp_images/1q.jpg';
import './Explore.css';
import {connect} from 'react-redux';


 class Explore extends Component{
    constructor(){
        super();

      this.state = {
        isExploreCurrent: false,
        subheader: '',
        followed_blogs: [],
        tiles: [{
          id: 1,
          profile_img: profile_img,
          username: 'catto',
          post_img: post_img,
          followers_count: 34
        }]
      }
      this.handleChangeToTrending = this.handleChangeToTrending.bind(this);
      this.handleChangeToStaffPicks = this.handleChangeToStaffPicks.bind(this);
      this.handleChangeToText = this.handleChangeToText.bind(this);
      this.handleChangeToPhotos = this.handleChangeToPhotos.bind(this);
      this.handleFollowBlog = this.handleFollowBlog.bind(this);
      this.getFollowedBlogIds = this.getFollowedBlogIds.bind(this);
    }

    //When the component mounts, set the background color. Also, set the 'isExploreCurrent' (in state) to 'true'.
    //Also also, run the method that loads the blog posts that have the most “love”s (“Trending”). 
    //NOTE: On the back end, sort the posts from most loves to least.
    componentDidMount(){
        document.body.background = '#36465d';
        this.setState({isExploreCurrent: true})
        this.handleChangeToTrending();
        this.getFollowedBlogIds();
        console.log(this.props.authUser)
    }

    //When the component unmounts, set the 'isExploreCurrent' (in state) to 'false'.
    componentWillUnmount(){
        this.setState({isExploreCurrent: false})
    }

    //When this function is invoked, get the ids of the blogs that are followed
    getFollowedBlogIds() {
      axios.get(`/api/get_ids_of_blogs_followed`).then( response => {
        console.log('get ids of blogs followed results', response);
        this.setState({
          followed_blogs: response
        })
      }).catch( response => {
        console.log('get ids of blogs followed error', response);
      })
    }

    //When you click on a subheader, update state to reflect that.
    //Set up a method that will load the blog posts with the most loves when “Trending” is clicked
    handleChangeToTrending() {
      this.setState({subheader: 'Trending'});
      axios.get(`/api/get_trending_posts`).then( response => {
        console.log('get trending posts results', response);
        this.setState({tiles: response});
      }).catch ( response => {
        console.log('get trending posts error response', response);
      })
    }

    //When you click on a subheader, update state to reflect that.
    //When you click on the 'Staff Picks' subheader, run the method that loads the blog posts which are marked as such.
    handleChangeToStaffPicks() {
      this.setState({subheader: 'Staff Picks'});
      axios.get(`/api/get_staff_picks`).then( response => {
        console.log('get staff picks results', response);
        this.setState({tiles: response});
      }).catch ( response => {
        console.log('get staff picks error response', response);
      })
    }

    //When you click on a subheader, update state to reflect that.
    //When you click on the 'Text' subheader, run the method that loads the blog posts which are marked as such
    handleChangeToText() {
      this.setState({subheader: 'Text'});
      axios.get(`/api/get_text_posts`).then( response => {
        console.log('get text posts results', response);
        this.setState({tiles: response});
      }).catch ( response => {
        console.log('get text posts error response', response);
      })
    }

    //When you click on a subheader, update state to reflect that.
    //When you click on the 'Photos' subheader, run the method that loads the blog posts which are marked as such
    handleChangeToPhotos() {
      this.setState({subheader: 'Photos'});
      axios.get(`/api/get_photo_posts`).then( response => {
        console.log('get photo posts results', response);
        this.setState({tiles: response});
      }).catch ( response => {
        console.log('get photo posts error response', response);
      })
    }

    //When you click on “Follow” by the name of the blogger, their information should be added to the list of people you are following.
    //Then, you should run the 'getFollowedBlogIds' method, which will set the new information (including your new addition) on state.
    handleFollowBlog(username) {
      axios.post(`/api/add_blog_to_follow_list`, {
        follow_blog: username
      }).then( response => {
        console.log('add blog to follow list results', response);
        this.getFollowedBlogIds();
      }).catch ( response => {
        console.log('add blog to follow list error response', response);
      })
    }

    //When you click on "Unfollow" by the name of the blogger, their information should be removed from the list of people you are following.
    handleUnfollowBlog(username) {
      axios.delete(
        `/api/remove_blog_from_follow_list/${username}`
      ).then( response => {
        console.log('remove blog from follow list results', response);
        this.getFollowedBlogIds();
      }).catch ( response => {
        console.log('remove blog from follow list error response', response);
      })
    }
    
    //When you click on the name of the blogger, you should be routed to the blog of that person (pretty much like Dashboard). 

    render(){
        return(
            <div>
              <MainHeader currentuser={this.props.authUser.uid}/>
              <p>{this.props.authUser.uid}</p>
              <section className='subheader'>
                <p className='trending' onClick={this.handleChangeToTrending}>Trending</p>
                <p className='staff_picks' onClick={this.handleChangeToStaffPicks}>Staff Picks</p>
                <p className='text' onClick={this.handleChangeToText}>Text</p>
                <p className='photos' onClick={this.handleChangeToPhotos}>Photos</p>
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
                          {this.state.followed_blogs.indexOf(obj.id) < 0 ? 
                            <p className='follow_blogger' onClick={ (obj) => this.handleFollowBlog(obj.username) }>Follow</p> : 
                            <p className='unfollow_blogger' onClick={ (obj) => this.handleUnfollowBlog(obj.username) }>Unfollow</p>
                          }
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const authCondition = (authUser) => !!authUser;

export default connect(mapStateToProps)(Explore);