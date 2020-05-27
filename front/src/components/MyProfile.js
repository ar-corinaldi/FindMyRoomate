import React, { useState, useEffect } from "react";
import CarouselControlled from "./CarouselControlled";

function MyProfile(props) {
  const [rooms, setRooms] = useState(undefined);
  const fetching = async () => {
    if (!props.user) console.log("User null");
    else {
      const res = await fetch(`/rooms/${props.user.username}`);
      const newRoom = await res.json();
      console.log("Llegoooo las rooms", newRoom);
      setRooms(newRoom);
    }
  };
  useEffect(() => {
    if (!rooms) fetching();
  });
  return (
    <div className="container">
      {/* <div className="row">
        <div class="card-container">
          <div class="upper-container">
            <div class="image-container">
              <img src="profile.jpg" />
            </div>
          </div>

          {!props.user ? (
            "Log in please"
          ) : (
            <div class="lower-container">
              <div>
                <h3>{props.user.username}</h3>
                <h4>{props.user.occupation}</h4>
              </div>
              <div>
                <p>Age:{props.user.age}</p>
                <p>Genre: {props.user.genre}</p>
                <p>{props.user.description}</p>
              </div>
              <div>
                <a href="#" class="btn">
                  Contact me
                </a>
              </div>
            </div>
          )}
        </div>
      </div> */}
      <div className="row w-100">
        <CarouselControlled rooms={rooms} />
      </div>
    </div>
  );
}

export default MyProfile;
