import React from "react";
import {Link}from "react-router-dom";
import Register from "./components/Register.js";



function Room(){
    return(
        <div >
          <div className=" text-white">
         <h1 className="text-center"> Book Now</h1>
         
         <div className="card-group">
  <div className="card  bg-black m-5 dem">
    <img src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg" className=" h-100" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Superior Room</h5>
      <p className="card-text">A superior room is a room in a hotel that is more comfortable or has better amenities than other rooms.</p>
      <Link className="nav-link bg-warning text-black" to="/book">Book Now</Link>
      
       
    </div>
   
  </div>
  <div className="card bg-black m-5">
    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="h-100" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Family Room</h5>
      <p className="card-text">A Family room means the room is larger than the standard room and will accommodate 4- 6 people, usually with an extra twin bed or sleeper sofa.</p>
      <Link className="nav-link bg-warning text-black" to="/book">Book Now</Link>
    </div>
   
  </div>
  <div className="card bg-black m-5">
    <img src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg" className="h-100" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Suite</h5>
      <p className="card-text">A suite in a hotel or other public accommodation, such as a cruise ship denotes, according to most dictionary definitions, connected rooms under one room number.</p>
      <Link className="nav-link bg-warning text-black" to="/book">Book Now</Link>
    </div>
    
  </div>
</div>


<div className="card-group ">
  <div className="card bg-black m-5">
    <img src="https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M" className="h-100" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Duplex</h5>
      <p className="card-text">'Is a two-level room. It consists of at least one bedroom on one floor and a living room or bedroom on the second floor. You can also find more bedrooms on any of the floors.</p>
      <Link className="nav-link bg-warning text-black" to="/book">Book Now</Link>
    </div>
   
  </div>
  <div className="card bg-black m-5">
    <img src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/03/trump-hotel-chicago-illinois-usa.jpg" className="h-100" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Standard Room</h5>
      <p className="card-text">It is a type of single room, which has a king-size bed, or as two beds — this room is decorated with two queen-size beds.</p>
      <Link className="nav-link bg-warning text-black" to="/book">Book Now</Link>
    </div>
   
  </div>
  <div className="card bg-black m-5">
    <img src="https://viatravelers.com/wp-content/uploads/2021/01/single-hotel-room.jpg.webp" className="h-100" alt=""/>
    <div className="card-body">
      <h5 className="card-title">Grand Superior Room</h5>
      <p className="card-text">Our Grand Superior Room comprises of a Queen Size Bed and is furnished with carpeting, trendy furnishings and a large private Patio offers a side sea view.</p>
      <Link className="nav-link bg-warning text-black" to="/book">Book Now</Link>
    </div>
    
  </div>
</div>

    </div>
    
    
        </div>
    )
}
export default Room