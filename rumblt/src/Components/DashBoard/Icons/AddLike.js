import React, {Component} from 'react';
import './Icons.css'
export default class AddLike extends Component{
    constructor(){
        super()

        this.state={
            liked: false
        }
    }

    render(){

        return(
            <div id='addLike'>
      <svg 
id="footicon" 
data-name="Layer 1" 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 315 278.01">
<title>love</title>
<path id={this.state.liked ? 'heartActive' : 'heart'} onClick={()=>{this.setState({liked: !this.state.liked})}}
d="M663,211a81,81,0,0,0-146-48.33A81,81,0,1,0,400.6,273.6L508.51,381.51a12,12,0,0,0,17,0L633.4,273.6A80.83,80.83,0,0,0,663,211Z" 
transform="translate(-359.5 -118.5)" 
/>
</svg>
        </div>
    )
}
}