import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselControlled(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-100">
      {!props.rooms
        ? <h1>"No rooms yet"</h1>
        : props.rooms.map((room, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  src={room.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{props.address}</h3>
                  <p>{props.price}</p>
                </Carousel.Caption>

                <button className="btn" onClick={()=> handleSelect} >Not available</button>
              </Carousel.Item>
            );
          })}
    </Carousel>
  );
}

export default CarouselControlled;
