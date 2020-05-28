import React, { useState, useEffect, useRef } from "react";
import "./UserProfile.css";
import Talk from "talkjs";
import {Link } from "react-router-dom";

function UserProfile({ match }) {
  const [profile, setProfile] = useState([]);
  const chatContainerRef = useRef();
  const handleClick = () => {
    /* Session initialization code */
    Talk.ready
      .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User({
          id: profile[0]._id,
          name: profile[0].username,
          email: profile[0].email,
          photoUrl: "https://talkjs.com/docs/img/george.jpg",
          welcomeMessage: "Hello, I am interested in your room!",
        });

        const other = new Talk.User({
          id: profile[1]._id,
          name: profile[1].username,
          email: profile[1].email,
          photoUrl: "https://talkjs.com/docs/img/george.jpg",
          welcomeMessage: "Hi",
        });

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */

        window.talkSession = new Talk.Session({
          appId: "tknEJI1i",
          me: me,
        });

        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(
          conversationId
        );

        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        const chatbox = window.talkSession.createChatbox(conversation);
        chatbox.mount(chatContainerRef.current);

        this.chatbox = window.talkSession.createChatbox(conversation);
        this.chatbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetch(`/profile/${match.params.userProfile}`)
      .then((res) => res.json())
      .then((newprofile) => {
        console.log(newprofile);
        setProfile(newprofile)
      });
  }, []);

  return (
    <div >
      <div  ref={chatContainerRef} className="card-container">
        <div className="upper-container">
          <div className="image-container">
            <img src="https://talkjs.com/docs/img/george.jpg" />
          </div>
        </div>
        {profile.length === 0 ? (
          ""
        ) : (
          <div className="lower-container">
            <div>
              <h3>{profile[1].username}</h3>
              <h4>{profile[1].occupation}</h4>
            </div>
            <div>
              <p>Age:{profile[1].age}</p>
              <p>Gender: {profile[1].gender}</p>
              <p>{profile[1].description}</p>
            </div>
            <div>
              <button className="btn" onClick={handleClick}>Contact me</button>
            </div>
          </div>
        )}
            <div >
      <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
      </div>
      </div>
    
  

        <section className="container">
        <Link to="/feed" >
          <button className="btn" aria-label="back">Back</button>
          </Link>
        </section>

    </div>
  );
}

export default UserProfile;
