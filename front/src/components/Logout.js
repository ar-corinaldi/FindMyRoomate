import React, { useEffect } from "react";

function Logout(props) {
  fetch("/logout");

  useEffect(() => {
    props.setUser(null);
  });
  return <div>Thanks for visiting us!</div>;
}

export default Logout;
