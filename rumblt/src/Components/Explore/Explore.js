import React, {Component} from 'react';
import MainHeader from '../Headers/Main Header/MainHeader'
import "../Explore/Explore.css"


export default class Explore extends Component{
    constructor(){
        super()
        this.state={
            isExploreCurrent: false
        }

    }

    componentDidMount(){
        document.body.background = '#36465d';
        this.setState({isExploreCurrent: true})
    }
    
    componentWillUnmount(){
        this.setState({isExploreCurrent: false})
    }
    

    render(){
        return(
            <div id="exploremain">
                <header>
                    <MainHeader isExploreCurrent={this.state.isExploreCurrent}/>
                </header>
                Explore
            </div>
        )
    }
}