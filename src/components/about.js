import React, { Component } from 'react';
import me from '../images/me.jpg';
class About extends Component{ 

    render(){
        return(
            <div>
                <div className="content">
                
                <div className="mypic">
                <center><img src={me} /></center>
                 
                 <center>Muhammad Asim</center>
                </div>
                </div>
            </div>
        );
    }
}
export default About;