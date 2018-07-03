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
                Poster Image
                </div>

                <div className="postdisplay">
                <div className="pdheader">
                Post Header
                </div>
                <div className="pdcontent">
                Content
                </div>
                <div className="pdfooter">
                FOOTER
                </div>
                </div>
            </div>
        )
    }
}