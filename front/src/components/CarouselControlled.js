import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselControlled(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 
  return (

    <div className="container">
      <section>
        <h1>Publications</h1>
        <h6>Here you can see the rooms you have published!</h6>
      </section>
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-100">
    {!props.rooms
      ? <h1>"No rooms published yet"</h1>
      : props.rooms.map((room, index) => {
          return (
            <Carousel.Item key={index}>
               
               <div id={`card-${index}`} className="card">
               <img src={room.image} alt="room pictures" />
               <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                 
                    {room.address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{room.furnished} <span><p>Furniture</p></span></li>
                    <li className="icon-bath">{room.bathroom} <span>bathrooms</span></li>
                    <li className="icon-car">{room.furnished} <span>parking spots</span></li>
                </ul>
            </div>
        </div>

            </Carousel.Item>
          );
        })}
  </Carousel>
        <div className="container">
        <button className="btn">Not available</button>
        </div>
 
  </div>
  );
}

export default CarouselControlled;
