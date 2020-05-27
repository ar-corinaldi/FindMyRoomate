import React, { useState, useEffect, useRef } from "react";

function SearchBar(props) {
  const [text, setText] = useState("");
  const textRef = useRef();
  const fetching = async (text) => {
    let newText = text.replace(" ", "-");
    console.log(newText);
    let url = `/search/${newText}`;
    if(text==="") url = "/loadFeed";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    props.setFeed(data);
    props.setPages(data.length);
  };

  let change = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
    setText(textRef.current.value);
    
    fetching(textRef.current.value);
  };

  return (
    <div className="col">
      <form class="form-inline md-form mr-auto mb-4">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          ref={textRef}
        />
        <button
          class="btn btn-elegant btn-rounded btn-sm my-0"
          onClick={change}
        >
          Search
        </button>
        <div className="ml-3">{text===""? "" : `Last search '${text}'`}</div>
      </form>
    </div>
  );
}

export default SearchBar;
