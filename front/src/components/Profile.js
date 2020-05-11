import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  const refPrice = useRef();
  const refDescription = useRef();
  const refImage = useRef();

  return (
    <div>
      <div className="col-lg-6 bg-light">
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Add your Offer!</h1>
          </div>

          <form method="POST" action="/feed">
            <div className="form-group">
              <label className="label-input" htmlFor="image">
                Image
              </label>
              <input
                className="form-control"
                type="text"
                name="image"
                id="image"
                ref={refImage}
                required
              />
            </div>
            <div className="form-group">
              <label className="label-input" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                required
                ref={refPrice}
              />
            </div>
            <div className="form-group input-group col-md-12">
              <label className="label-input" htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                required
                ref={refDescription}
              >
              </textarea>
            </div>
            <button className="go-but" type="submit">
              Create
            </button>
          </form>
          <div className="register">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
