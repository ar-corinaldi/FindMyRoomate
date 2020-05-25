import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";

function Feed(props) {
  const [feed, setFeed] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    fetching();
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

  const renderFeed = () => {
    console.log("What is this?", feed);
    if (!feed) return "";
    else
      return feed.map((element) => (
        <div key={element.id} className="card">
          <img
            className="card-img-top"
            src={element.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{element.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{element.price}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              {element.user}
            </a>
            <a href="#" className="card-link">
              {element.availability ? "Available" : "No Available"}
            </a>

            <a href="/chat" className="card-link">
              Enviar un mensaje
            </a>
          </div>
        </div>
      ));
  };

  return (
    <div>
      Current Offers
      <div id="theseCards">{renderFeed()}</div>
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
    </div>
  );
}

export default Feed;
