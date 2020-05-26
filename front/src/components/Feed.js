import React, { useState, useEffect } from "react";
import Talk from 'talkjs';
import SearchBar from "./SearchBar";
import location from "./placeholder.png";
import message from "./mesaage.png";
import {Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
  
  function Feed(props) {
    const [feed, setFeed] = useState(undefined);
  
  const [pageNumber, setPageNumber] = useState(1);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetching();
  }, []);

  useEffect(() => {
    fetch("/getUsers2").then((res) => res.json())
      .then((newusers) => setUsers(newusers));

  }, []);

  const fetching = async () => {
    const res = await fetch("/loadFeed");
    const newFeed = await res.json();
    setFeed(newFeed);
  };


  const handleChange = async (event, newCurrent) => {
    setPageNumber(newCurrent);
    const res = await fetch(`/pageFeed/${newCurrent}`);
    const newFeed = await res.json();
    setFeed(newFeed);
  };

  const handleClick= (userName)=> {
 
    /* Retrieve the two users that will participate in the conversation */
    const user = users.find(user => user.username === userName)

    /* Session initialization code */
    Talk.ready
    .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User({
          id: props.user._id,
          name: props.user.username,
          email: props.user.email,
          photoUrl: "https://talkjs.com/docs/img/george.jpg",
          welcomeMessage: " Hi, im interested"
      });

        const other = new Talk.User({         
          id: user._id,
          name: user.username,
          email: user.email,
          photoUrl: "https://talkjs.com/docs/img/george.jpg",
          welcomeMessage: " Hi"
      })

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
            window.talkSession = new Talk.Session({
                appId: process.env.REACT_APP_API_KEY,
                me: me
            });
        } 
        
        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(conversationId);
        
        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        this.chatbox = window.talkSession.createChatbox(conversation);
        this.chatbox.mount(this.container);
        
        
    })            
    .catch(e => console.error(e));
};
  

  const renderFeed = () => {
    if (!feed) return "";
    else
    return feed.map((element) => (
      <div key={element.id} className="card mt-5">
        <img
          className="card-img-top"
          src={element.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title"><img src={location} width="30" height="30"/>{element.address}</h5>
          <h6 className="card-text">Furnished:</h6> <p>Complete</p>
          <h6 className="card-text">Bathroom:</h6> <p>Private</p>
         
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><h6>Price</h6><p>${element.price}{element.currency}</p></li>
          <li className="list-group-item"><h6>{element.city}</h6></li>
      
        </ul>
        <div className="card-body">
        <Link to={`/user/${element.user}`} >
          <a className="card-link">
            {element.user}
          </a>
          </Link>

          <h5>
            {element.availability ? "Available" : "No Available"}
          </h5>
          <button className="button" onClick={ ()=>handleClick(element.user)}><img src={message} width="30" height="30"/></button>
        </div>
      </div>
    ));
  };

  return (
    
    <div>
  
      <section> 
        <h3>Current Offers</h3>
        <SearchBar></SearchBar>
      </section>
      <div id="thisCards">{renderFeed()}</div>
      <div id="pagination">
        {!feed ? (
          ""
        ) : (
          <Pagination
            count={Math.ceil(props.pages/9)}
            page={pageNumber}
            defaultPage={1}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        )}
      </div>
      <div className="chatbox-container" >
            <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
         </div>
      </div>
    
  );
}

export default Feed;
