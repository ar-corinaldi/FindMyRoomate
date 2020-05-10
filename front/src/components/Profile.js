import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <div>
      Hello Profile
      <div className="col-lg-6">
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Inicie su sesión</h1>
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
              />
            </div>
            <div className="form-group input-group">
              <label className="label-input" htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                required
              >
              </textarea>
            </div>
            <button type="submit">
              Crear
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
