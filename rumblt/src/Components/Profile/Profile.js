// eslint-disable-next-line

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserFollowers} from '../../reducers/following';
import MainHeader from './../Headers/Main Header/MainHeader';
import love from './icons/love.svg';
import notloved from './icons/notloved.svg';
import default_profile_img from './temp_images/default_profile_pic.png';
import './Profile.css';

var imgStyle = {
  width: 25,
  height: 25
}


export class Profile extends Component{
  constructor(){
    super();

    this.state = {
      isExploreCurrent: false,
      profile_pic: default_profile_img,
      blog_title: 'blog title',
      user_id: '',
      posts: [],
      like_ids: [],
      subheader: 'Posts'
      }
      this.retriveProfileData = this.retriveProfileData.bind(this);
      this.getPostsByUser = this.getPostsByUser.bind(this);
      this.getLikeIds = this.getLikeIds.bind(this);
      this.handleChangeToPosts = this.handleChangeToPosts.bind(this);
      this.handleChangeToLikes = this.handleChangeToLikes.bind(this);
      this.handlePostLikeOnClick = this.handlePostLikeOnClick.bind(this);
      this.handlePostUnlikeOnClick = this.handlePostUnlikeOnClick.bind(this);
    }

//When the component mounts, axios.get the profile pic, (and get username from elsewhere), set on state
//Also axios.get the posts they have made  (starting with the most recent), set them on state
//Also axios.get the people you are following (does not show if you are on someone else’s page), set them on state
componentDidMount() {
    document.body.background = '#36465d';
    this.setState({isExploreCurrent: true});
    this.retriveProfileData();
    this.getPostsByUser();
    // this.getFollowedBlogInfo();
    this.getLikeIds();
    // console.log(this.state.tiles + 'state in profile')
  }

//When the component unmounts, set the 'isExploreCurrent' (in state) to 'false'.
componentWillUnmount(){
    this.setState({isExploreCurrent: false})
  }

retriveProfileData () {
  axios.get(`/api/users/${this.props.match.params.userid}`).then((res) => {
    // console.log('profile component - retriveProfileData', res.data[0]);
    this.setState({
      profile_pic: res.data[0].userimg,
      blog_title: res.data[0].blogtitle,
      user_id: res.data[0].userid
    })
  })
}

getPostsByUser() {
  this.setState({subheader: 'Posts'});
  axios.get(`/api/posts/${this.props.match.params.userid}`).then( response => {
    // console.log('profile posts results', response.data)
    this.setState({posts: response.data});
  }).catch ( response => {
    console.log('get profile posts error', response);
  })
}

getLikeIds() {
  axios.get(`/api/get_like_ids/${this.props.match.params.userid}`).then( response => {
    // console.log('TEST get like ids', response.data);
    let newArray = response.data.map( obj => {
      return +obj.postid
    })
    // console.log('newArray!!', newArray)
    this.setState({like_ids: newArray});
  }).catch( error => {
    console.log('get like ids error', error);
  })
}

//Set up method handleChangeToPosts() axios.get the posts they have made,  
//(starting with the most recent), set them on state
handleChangeToPosts() {
  this.getPostsByUser();
}

//Set up method handleChangeToLikes() axios.get the posts they have made 
//which have the most “hearts”. Sort from most to least.
handleChangeToLikes() {
  this.setState({subheader: 'Likes'});
  axios.get(`/api/get_profile_user_likes/${this.props.match.params.userid}`).then( response => {
    // console.log('get profile liked posts results', response.data);
    this.setState({posts: response.data});
  }).catch ( error => {
    console.log('get profile trending posts error', error);
  })
}

//Set up handlePostLikeOnClick()
handlePostLikeOnClick(userid, postid) {
  axios.post(`/api/likes/`, {
    userid: userid,
    postid: postid
  }).then( () => {
    this.getLikeIds();
  }).catch( error => {
    console.log('add post like error', error)
  })
}

//Set up handlePostUnlikeOnClick()
handlePostUnlikeOnClick(userid, postid) {
  axios.delete(
    `/api/likes/${userid}/${postid}`
  ).then( () => {
    this.getLikeIds();
  }).catch( error => {
    console.log('delete post like error', error)
  })
}


render(){
  return(
      <div>
        <MainHeader />
        <section className='below_header'>
          <div className='profile_info_and_nav'>

          {this.state.profile_pic != null ? 
          <img className='profile_pic' src={this.state.profile_pic} alt='profile pic'/> : 
          <img className='profile_pic' src={default_profile_img} alt='profile pic'/>}

          <p className='name_of_blog'>{this.state.blog_title}</p>

          <div className='profile_navs_container'>
            <p className='profile_posts_nav' onClick={this.getPostsByUser}>Posts</p>
            <p className='profile_trending_nav' onClick={this.handleChangeToLikes}>Likes</p>
            <Link to='/dashboard'>
              <p className='profile_create_new_post_nav'>Create new post</p>
            </Link>
          </div>
          
          </div>
          <div className='posts_and_following_list'>
          {this.state.posts[0] ?
            <div className='profile_posts'>
              {this.state.posts.map( obj => {
                return (
                  <div key={obj.id} className='profile_post'>
                    <div className='profile_post_content_container'>
                      {obj.type === 'img' ? 
                      <img className='postcontentimg' src={obj.img} alt='profile post content' /> : 
                      <p className='postcontenttext'>{obj.content}</p>}
                    </div>

                    <div className='profile_post_footer'>
                      <div className='profile_post_actions_container'>
                        {this.state.like_ids.indexOf(obj.id) < 0 ? 
                          <img className='profile_post_action_notloved' src={notloved} alt='Not Loved Icon' style={imgStyle} onClick={ () => this.handlePostLikeOnClick(this.props.match.params.userid, obj.id) }/> : 
                          <img className='profile_post_action_loved' src={love} alt='Love Icon' style={imgStyle} onClick={ () => this.handlePostUnlikeOnClick(this.props.match.params.userid, obj.id) }/>
                        }
                      </div>
                    </div>
                    </div>
                )
              })}
            </div> :
            <p>no posts made yet!</p> }
          </div>
        </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  getUserFollowers
});

const authCondition = (authUser) => !!authUser;

export default connect(mapStateToProps)(Profile);

