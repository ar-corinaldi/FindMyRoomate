import React from "react";


function SearchBar(props) {
  return (
      <div>
<form class="form-inline md-form mr-auto mb-4">
  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
  <button class="btn btn-elegant btn-rounded btn-sm my-0" type="submit">Search</button>
</form>
</div>
);
}

export default SearchBar;