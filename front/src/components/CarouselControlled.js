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
        ? "No rooms yet"
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
              </Carousel.Item>
            );
          })}
    </Carousel>
  );
}

export default CarouselControlled;
