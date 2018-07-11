// eslint-disable-next-line

import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserFollowers} from '../../reducers/following';
import MainHeader from './../Headers/Main Header/MainHeader';
import reply from './icons/reply.svg';
import reblog from './icons/reblog.svg';
import love from './icons/love.svg';
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
      subheader: 'Posts'
      }
      this.retriveProfileData = this.retriveProfileData.bind(this);
      // this.getFollowedBlogIds = this.getFollowedBlogIds.bind(this);
      this.getPostsByUser = this.getPostsByUser.bind(this);
      // this.handleChangeToUserLikes = this.handleChangeToUserLikes.bind(this);
      // this.handleFollowBlog = this.handleFollowBlog.bind(this);
      // this.handleUnfollowBlog = this.handleUnfollowBlog.bind(this);
      // this.handleReplyOnClick = this.handleReplyOnClick.bind(this);
      // this.handleReblogOnClick = this.handleReblogOnClick.bind(this);
      // this.handleLoveOnClick = this.handleLoveOnClick.bind(this);
    }

//When the component mounts, axios.get the profile pic, (and get username from elsewhere), set on state
//Also axios.get the posts they have made  (starting with the most recent), set them on state
//Also axios.get the people you are following (does not show if you are on someone else’s page), set them on state
componentDidMount() {
    document.body.background = '#36465d';
    this.setState({isExploreCurrent: true});
    //this.getFollowedBlogIds();
    this.retriveProfileData();
    this.getPostsByUser();
    console.log(this.state.tiles + 'state in profile')
  }

//When the component unmounts, set the 'isExploreCurrent' (in state) to 'false'.
componentWillUnmount(){
    this.setState({isExploreCurrent: false})
  }

retriveProfileData () {
  axios.get(`/api/users/${this.props.match.params.userid}`).then((res) => {
    console.log('profile component - retriveProfileData', res.data[0]);
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
    console.log('profile posts results', response.data)
    this.setState({tiles: response.data});
  }).catch ( response => {
    console.log('get profile posts error', response);
  })
}

//When this function is invoked, get the ids of the blogs that are followed
//and set that info on state

// getFollowedBlogIds() {
//   axios.get(`/api/get_ids_of_blogs_followed`).then( response => {
//     console.log('get ids of blogs followed results', response);
//     this.setState({
//       followed_blogs: response
//     })
//   }).catch( response => {
//     console.log('get ids of blogs followed error', response);
//   })
// }

//Set up method handleChangeToPosts() axios.get the posts they have made,  
//(starting with the most recent), set them on state

//Set up method handleChangeToTrending() axios.get the posts they have made 
//which have the most “hearts”. Sort from most to least.

getLikesByUser() {
  this.setState({subheader: 'Likes'});
  axios.get(`/api/userLikes/${this.props.match.params.userid}`).then( likedPosts => {
    console.log('get profile trending posts results', likedPosts);
    //this.setState({profile_trending: response});
  }).catch ( response => {
    console.log('get profile trending posts results', response);
  })
}

//Set up method handleFollowBlog() axios.post the blog as one of the blogs 
//you are following
//----
//(follow up with method that gets the list of people you are following now, 
//and set that on state)

// handleFollowBlog(username) {
//   axios.post(`/api/add_blog_to_follow_list`, {
//     follow_blog: username
//   }).then( response => {
//     console.log('add blog to follow list results', response);
//     this.getFollowedBlogIds();
//   }).catch( response => {
//     console.log('add blog to foll list error response', response);
//   })
// }

//Set up method handleUnfollowBlog() axios.delete the blog as one you are following.
//----
//(follow up with method that gets the list of people you are following now, and set 
//that on state)

// handleUnfollowBlog(username) {
//   axios.delete(
//     `/api/remove_blog_from_follow_list/${username}`
//   ).then( response => {
//     console.log('remove blog from follow list results', response);
//     this.getFollowedBlogIds();
//   }).catch( response => {
//     console.log('remove blog from follow list error response', response);
//   })
// }

//Set up handleReplyOnClick() 
handleReplyOnClick() {}



//Set up handleLoveOnClick()
handleLoveOnClick() {}


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

          {this.props.match.params.userid !== this.state.user_id ?
          <div><button>Follow</button><button>Unfollow</button></div>:
          null}

          <div className='profile_navs_container'>
            <p className='profile_posts_nav'>Posts</p>
            <p className='profile_trending_nav'>Likes</p>
            <p className='profile_create_new_post_nav'>Create new post</p>
          </div>
          
          </div>
          <div className='posts_and_following_list'>
            <div className='profile_posts'>
              {/* {this.state.tiles.map( obj => {
                return (
                  <div key={obj.id} className='profile_post_tile'>
                    <div className='pofile_post_tile_header'>
                      <img className='profile_pic' src={this.state.pic} alt='profile post blogger pic'/>
                      <p className='profile_post_blogger_username'>{this.state.username}</p>
                    </div>

                    <div className='profile_post_content_container'>
                      <img className='postcontentimg' src='' alt='profile post content' />
                      <p className='profile_post_text'>Profile Post Text</p>
                    </div>

                    <div className='profile_post_comment_container'>
                      <p className='profile_post_comment'>profile post comment</p>
                    </div>

                    <div className='profile_post_footer'>
                      <p className='number_of_replies'>Number of replies</p>
                      <div className='profile_post_actions_container'>
                        <img className='profile_post_action_reply' src={reply} alt='Reply Icon' style={imgStyle} />
                        <img className='profile_post_action_reblog' src={reblog} alt='Reblog Icon' style={imgStyle} />
                        <img className='profile_post_action_love' src={love} alt='Love Icon' style={imgStyle} />
                      </div>
                    </div>
                    </div>
                )
              })} */}
            </div>
            <div className='following_list'>
            <h2>FOLLOWED BLOGS</h2>
            </div>
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

