// eslint-disable-next-line

import React, {Component} from 'react';


export default class Profile extends Component{
    constructor(){
        super()
        this.state={
            page: 'profile'
        }

    }

    render(){
        return(
            <div>
                {this.state.page}
            </div>
        )
    }
}