import React, { useEffect } from "react";

function Logout(props) {
  useEffect(() => {
    props.setUser({});
    fetch("/logout");
  });
  return <div>Thanks for visiting us!</div>;
}

export default Logout;
