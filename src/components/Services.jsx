import React from 'react';
import second, { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

function Service() {
  return (
    <div className='services'>

      <Carousel>
        <div>
           <img src={img1} alt="Item1" />
           <p>Full Stack</p>
        </div>
     
     
        <div>
           <img src={img2} alt="Item3" />
           <p>Peer-to-peer Support</p>
        </div>
    
      </Carousel>  
    </div> 
  )
}

export default Service