// eslint-disable-next-line

import React, {Component} from 'react';
import './Dashfeed.css'


export default class DashFeed extends Component{
    constructor(){
        super()

        this.state={
            randomImg: ['https://78.media.tumblr.com/7d376efd024eadd902a8bb60c8155c94/tumblr_o51oavbMDx1ugpbmuo4_540.png', 'https://78.media.tumblr.com/004fac2f3b9691a47941d0710496bfff/tumblr_o51oavbMDx1ugpbmuo9_540.png', 'https://78.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_540.png', 'https://78.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png']
        }

    }

    render(){
        console.log(this.props , "ITS BRITTANY BITCH")
        return(
           
            <div id='maindashfeed'>
                <div className="posterimage">
                {this.props.userimg !== null ? 
                <img src={this.props.userimg} alt=""/> :
                <img src={this.state.randomImg[Math.floor(Math.random()*this.state.randomImg.length)]} alt=""/>
                }
                </div>

                <div className="postdisplay">
                <div className="pdheader">
                {/* {this.props.posterName} */}
                </div>
                {this.props.type === 'img' ?
                <div className="pdcontent">
                <img src={this.props.content} alt=""/>
                </div>
                :
                <div>
                <p>{this.props.content}</p>
                </div>
                }
                <div className="pdfooter">
                <div className="desc">
                {/* {this.props.postCaption} */}
                </div>
                <div className="footerfooter">
                <div className="notes">
                {/* {`${this.props.notes} notes`} */}
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}