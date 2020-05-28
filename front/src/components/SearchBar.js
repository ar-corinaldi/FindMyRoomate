import React, { useState, useRef } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import useAutocomplete from "@material-ui/lab/useAutocomplete";

function SearchBar(props) {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const textRef = useRef();
  const fetching = async (text) => {
    let newText = text.replace(" ", "-");
    let url = `/search/${newText}`;
    if (text === "") url = "/loadFeed";
    const res = await fetch(url);
    const data = await res.json();
    props.setFeed(data);
    props.setPages(data.length);
  };

  let change = (e) => {
    e.preventDefault();

    fetching(input);
  };
  const options = [
    "COL",
    "USD",
    "EUR",
    "Only Private",
    "Shared",
    "Private and public",
    "Complete",
    "Only room",
    "No furniture",
  ];
  return (
    <div className="col">
      <form class="form-inline md-form mr-auto mb-4">
        <Autocomplete
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          value={text}
          onChange={(event, newText) => {
            console.log(newText);
            setText(newText);
          }}
          inputValue={input}
          onInputChange={(event, newInputValue) => {
            setInput(newInputValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        />
        <button
          class="btn btn-elegant btn-rounded btn-sm my-0"
          onClick={change}
        >
          Search
        </button>

        <div className="ml-3">
          {input === "" ? "" : `Last search '${input}'`}
        </div>
      </form>
    </div>
  );
}

export default SearchBar;