import React, { useState, useEffect } from "react";
import CarouselControlled from "./CarouselControlled";

function MyProfile(props) {
  const [rooms, setRooms] = useState(undefined);
  const fetching = async () => {
    if (!props.user) console.log("User null");
    else {
      const res = await fetch(`/rooms/${props.user.username}`);
      const newRoom = await res.json();
      setRooms(newRoom);
    }
  };
  const setupWS = () => {
    const host = window.location.origin.replace(/^http/, "ws");
    const ws = new WebSocket(host);
    ws.onopen = () => {
      console.log("Websocket client connected");
      ws.onmessage = (msg) => {
        setRooms(JSON.parse(msg.data));
      };
    };
  };
  useEffect(() => {
    setupWS();

    if (!rooms) fetching();
  });
  return (
    <div className="container">
      <div className="row w-100">
        <CarouselControlled rooms={rooms} />
      </div>
    </div>
  );
}

export default MyProfile;
