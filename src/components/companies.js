 import React, { Component } from "react";
 import Slider from "react-slick";
 
 export default class Company  extends Component {
   render() {
     var settings = {
       
       autoplay: true,
       autoplaySpeed: 1500,
       pauseOnHover: true,
       responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 6,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1,
             initialSlide: 2,
             dots: true
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 2,
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
           <img
           className="d-block "
           src={require('../images/soft.jpg')}
           alt="First slide"
         />
           </div>
           <div>
           <img
           className="d-block "
           src={require('../images/sof.jpg')}
           alt="Third slide"
         />
           </div>
           <div>
           <img
           className="d-block"
           src={require('../images/haire.jpg')}
           alt="Third slide"
         />
           </div>
           <div>
           <img
           className="d-block"
           src={require('../images/abc (1).jpg')}
           alt="Third slide"
         />
           </div>
           <div>
           <img
           className="d-block"
           src={require('../images/abc (2).jpg')}
           alt="Third slide"
         />
           </div>
           <div>
           <img
           className="d-block"
           src={require('../images/abc (3).jpg')}
           alt="Third slide"
         />
           </div>
           <div>
           <img
           className="d-block"
           src={require('../images/abc (4).jpg')}
           alt="Third slide"
         />
           </div>
           <div>
           <img
           className="d-block"
           src={require('../images/abc (5).jpg')}
           alt="Third slide"
         />
           </div>
         </Slider>
       </div>
     );
   }
 }