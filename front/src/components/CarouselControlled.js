import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import next from "./assets/play-button.svg";
import previous from "./assets/previous.svg";
import bath from "./assets/bath.svg";
import bed from "./assets/bed.png";
import pet from "./assets/location.png";

function CarouselControlled(props) {
  const [index, setIndex] = useState(0);
  const nextIcon= useState(<img src={next} width="30" height="30" alt="next button"/>);
  const prevIcon= useState(<img src={previous} width="30" height="30" alt="prev button"/>);

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
        <h2>Here you can see the rooms you have published!</h2>
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
                    <li className="icon-bed"> <img src={bed} width="30" height="30" alt="bedicon"/>{room.furnished} <span><p>Furniture</p></span></li>
                    <li className="icon-bath"> <img src={bath} width="30" height="30" alt="bathicon"/>{room.bathroom} <span>Bathrooms</span></li>
                    <li className="icon-pet"> <img src={pet} width="30" height="30" alt="peticon"/>{room.pets} <span>Pets</span></li>
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
