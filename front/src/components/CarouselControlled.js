import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import next from "./assets/play-button.svg";
import previous from "./assets/previous.svg";

function CarouselControlled(props) {
  const [index, setIndex] = useState(0);
  const nextIcon= useState(<img src={next} width="30" height="30" alt="next button"/>);
  const prevIcon= useState(<img src={previous} width="30" height="30" alt="next button"/>);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const fetchAvaila = (room) => {
    console.log(room);
    fetch(`/rooms/update/${room._id}/${room.availability}`);
  };

  return (

    <div className="container">
      <section>
        <h1>Publications</h1>
        <h6>Here you can see the rooms you have published!</h6>
      </section>
    <Carousel nextIcon ={nextIcon} prevIcon={prevIcon} activeIndex={index} onSelect={handleSelect} className="w-100">
    {!props.rooms
      ? <h1>"No rooms published yet"</h1>
      : props.rooms.map((room, index) => {
          return (
            <Carousel.Item key={index}>
               
               <div id={`card-${index}`} className="card-profile">
               <img src={room.image} alt="room pictures" />
               <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                 
                    {room.address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{room.furnished} <span><p>Furniture</p></span></li>
                    <li className="icon-bath">{room.bathroom} <span>Bathrooms</span></li>
                    <li className="icon-pet">{room.pets} <span>Pets</span></li>
                </ul>
            </div>
        </div>
        <button className="btn mt-4" onClick={() => fetchAvaila(room)}>
                {room.availability ? "Available" : "No Available"}
              </button>

            </Carousel.Item>
          );
        })}
  </Carousel>

 
  </div>

  );
}

export default CarouselControlled;