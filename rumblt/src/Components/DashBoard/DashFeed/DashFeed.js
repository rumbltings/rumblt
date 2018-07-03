// eslint-disable-next-line

import React, {Component} from 'react';
import './Dashfeed.css'


export default class DashFeed extends Component{
    constructor(){
        super()

    }

    render(){
        return(
            <div id='maindashfeed'>
                <div className="posterimage">
                <img src={this.props.posterImage} alt=""/>
                </div>

                <div className="postdisplay">
                <div className="pdheader">
                {this.props.posterName}
                </div>
                <div className="pdcontent">
                <img src={this.props.postContent} alt=""/>
                </div>
                <div className="pdfooter">
                <div className="desc">
                {this.props.postCaption}
                </div>
                <div className="footerfooter">
                <div className="notes">
                {`${this.props.notes} notes`}
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}