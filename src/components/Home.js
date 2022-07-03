import React from "react";

import {Carousel} from 'react-bootstrap'

function Home(){
  return(
     
  <div>
     
     <Carousel >
  <Carousel.Item>
    <img
      className="  d-block w-100 see"
      id="1"

      src="https://purewows3.imgix.net/images/articles/2019_08/Grand_Velas.jpeg?auto=format,compress&cs=strip"
      alt=""
    />
    <Carousel.Caption>
      <h1 className="text-white">NICE AND COMFORTABLE PLACE TO STAY</h1>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" d-block w-100 see"
      id="2"
      src="https://blog.mrandmrssmith.com/wp-content/uploads/2016/08/BestHoneymoonSuites_hero-2323x950.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h1>Luxurious Stay at Affordable Price</h1>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 see"
      id="3"
      src="https://cdn1.matadornetwork.com/blogs/1/2014/05/St-Regis-Mauritius-Resort-.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h1>Spend Your Holiday</h1>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
    
  

  </div>
    

    
  )
}
export default Home