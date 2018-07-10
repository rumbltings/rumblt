import React from 'react';
import axios from 'axios';
import './UserInfo.css';
import {connect} from 'react-redux';
import SignOutButton from '../../../../Login/signOut';

export class UserInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentuser: {
                id: '',
                img: '',
                username: '',
                blogtitle: '',
            }
        }
    }

    componentDidMount () {
        this.setState({id: this.props.authUser.uid })

        axios.get(`/api/users/${this.props.authUser.uid}`).then((res) => {
            
        })
    }

    render () {
    return(
        <div id='ui'>
            <div className="uitop">

                <div className="uiheader">

                    <div className="uiheaderleft">
                    ACCOUNT
                    </div>

                    <div className="uiheaderright">
                    <SignOutButton/>
                    </div>

                </div>

                <div className="uilikes uicolumn hov">

                <div className="leftwrapper">

                    <div className="uiimage">
                    IMG
                    </div>

                    <div className="uitext">
                    Likes
                    </div>

                </div>

                    <div className="uinum">
                    {this.props.likeCount}
                    </div>

                </div>
                
                <div className="uifollowing uicolumn hov">

                <div className="leftwrapper">

                    <div className="uiimage">
                    IMG
                    </div>

                    <div className="uitext">
                    Following
                    </div>

                </div>

                    <div className="uinum">
                    #
                    </div>

                </div>

                <div className="uisettings uicolumn hov">

                <div className="leftwrapper">
                    <div className="uiimage">
                    IMG
                    </div>

                    <div className="uitext">
                    Settings
                    </div>
                </div>

                </div>

                <div className="uihelp uicolumn hov">

                <div className="leftwrapper">
                    
                    <div className="uiimage">
                    IMG
                    </div>

                    <div className="uitext">
                    Help
                    </div>
                </div>
                
                </div>

            </div>


            <div className="uibottom">
                <div className="uiheader">

                    <div className="uiheaderleft">
                    RUMBLTRS
                    </div>

                    <div className="uiheaderright">
                    +New
                    </div>

                </div>

                <div className="uiuser hov">
                
                <div className="uiuserimg">
                <img src={this.props.authUser} alt=""/>
                </div>

                <div className="uiuserinfo">
                <div className="uiusername">
                username
                </div>
                <div className="uiblogtitle">
                blogtitle
                </div>
                </div>

                </div>

                <div className="uibtext hov">
                    <div className='uitext'>
                    Posts
                    </div>
                    <div className='uinum'>
                        {this.props.postCount}
                    </div>
                </div>

                <div className="uibtext hov">
                <div className="uitext">
                    Followers
                    </div>
                </div>

            </div>
        </div>
    )}
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
  });
  
  const authCondition = (authUser) => !!authUser;
  
  export default connect(mapStateToProps)(UserInfo);