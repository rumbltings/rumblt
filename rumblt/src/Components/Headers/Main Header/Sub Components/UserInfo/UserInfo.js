import React from 'react';
import './UserInfo.css'
import SignOutButton from '../../../../Login/signOut';

export default function UserInfo(props){
    console.log(props, 'ppppropss')
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
                    {props.likeCount}
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
                <img src={props.currentuser.userimg} alt=""/>
                </div>

                <div className="uiuserinfo">
                <div className="uiusername">
                {props.currentuser.username}
                </div>
                <div className="uiblogtitle">
                {props.currentuser.blogtitle}
                </div>
                </div>

                </div>

                <div className="uibtext hov">
                    <div className='uitext'>
                    Posts
                    </div>
                    <div className='uinum'>
                        {props.postCount}
                    </div>
                </div>

                <div className="uibtext hov">
                <div className="uitext">
                    Followers
                    </div>
                </div>

            </div>
        </div>
    )
}