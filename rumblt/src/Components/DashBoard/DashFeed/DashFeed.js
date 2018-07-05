// eslint-disable-next-line

import React, {Component} from 'react';
import './Dashfeed.css'


export default class DashFeed extends Component{
    constructor(){
        super()

    }

    render(){
        console.log(this.props.userimg + "ITS BRITTANY BITCH")
        return(
           
            <div id='maindashfeed'>
                <div className="posterimage">
                <img src={this.props.userimg} alt=""/>
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