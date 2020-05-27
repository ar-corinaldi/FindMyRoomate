import React, { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile({ match }) {
  const [profile, setProfile] = useState({});
  const elprofile = match.params.userProfile;

  useEffect(() => {
    fetch(`/profile/${match.params.userProfile}`)
      .then((res) => res.json())
      .then((newprofile) => setProfile(newprofile));
  }, []);

  return (
    <div>
      <div class="card-container">
        <div class="upper-container">
          <div class="image-container">
            <img src="profile.jpg" />
          </div>
        </div>

        <div class="lower-container">
          <div>
            <h3>{profile.username}</h3>
            <h4>{profile.occupation}</h4>
          </div>
          <div>
            <p>Age:{profile.age}</p>
            <p>Genre: {profile.genre}</p>
            <p>{profile.description}</p>
          </div>
          <div>
            <a href="#" class="btn">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
