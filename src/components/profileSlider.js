import React, { Component } from "react";
import Slider from "react-slick";

export default class ProfileSlider  extends Component {
  render() {
    var settings = {
      
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      responsive: [
       {
         breakpoint: 1500,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
           dots: true
         }
       },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
         <div className="profile-card">
          <div className="card-header">
          <center><img src={require('../images/asim.jpg')} className="card-image" onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
            Muhammad Asim <br />
            professional react web developer
           
             </center>
             <div className="card-content">
             I am a student of software engineering in the university of agriculture faisalabad.
             </div>
             <center><a href="">profile</a></center>
          </div>
         </div>
          </div>
          <div>
          <div className="profile-card">
          <div className="card-header">
          <center><img src={require('../images/mudasir.jpg')} className="card-image" onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
            Mudasir Husain <br />
            professional react web developer
           
             </center>
             <div className="card-content">
             I am a student of software engineering in the university of agriculture faisalabad.
             </div>
             <center><a href="">profile</a></center>
          </div>
         </div>
          </div>
          <div>
          <div className="profile-card">
          <div className="card-header">
          <center><img src={require('../images/junaid.jpg')} className="card-image" onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
            junaid Ahmad <br />
            professional react web developer
           
             </center>
             <div className="card-content">
             I am a student of software engineering in the university of agriculture faisalabad.
             </div>
             <center><a href="">profile</a></center>
          </div>
         </div>
          </div>
          <div>
          <div className="profile-card">
          <div className="card-header">
          <center><img src={require('../images/hassan.jpg')} className="card-image" onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
            Hassan Taj <br />
            professional react web developer
           
             </center>
             <div className="card-content">
             I am a student of software engineering in the university of agriculture faisalabad.
             </div>
             <center><a href="">profile</a></center>
          </div>
         </div>
          </div>
          <div>
          <div className="profile-card">
          <div className="card-header">
          <center><img src={require('../images/asim.jpg')} className="card-image" onMouseOver={this.src=require('../images/after.png')} onMouseOut={this.src=require('../images/before.png')}/>
            Muhammad Asim <br />
            professional react web developer
           
             </center>
             <div className="card-content">
             I am a student of software engineering in the university of agriculture faisalabad.
             </div>
             <center><a href="">profile</a></center>
          </div>
         </div>
          </div>
         
        </Slider>
      </div>
    );
  }
}