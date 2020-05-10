import React from "react";

function Register(props) {

  const fetching = async () => {
    fetch("/register");
  }

  return (
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div
                  class="col-lg-6 d-none d-lg-block bg-login-image"
                  id="bg-login-image"
                >
                  {" "}
                  <img
                    width="450"
                    height="740"
                    src="https://user-images.githubusercontent.com/26877363/79059153-6ace2c00-7c3c-11ea-923f-9ba0cc1e7a50.jpg"
                    alt="Prendas de vestir"
                  ></img>
                </div>

                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Sign Up</h1>
                    </div>

                    <form method="POST" onSubmit={fetching}>
                      <div className="form-group">
                        <label className="label-input" htmlFor="username">
                          Username
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          id="usernameRegister"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-input" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="passwordRegister"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="label-input"
                          htmlFor="password2Register"
                        >
                          Repeat password
                        </label>
                        <input
                          type="password"
                          name="password2Register"
                          id="password2Register"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-input" htmlFor="nameRegister">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="nameRegister"
                          id="nameRegister"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label
                          className="label-input"
                          htmlFor="phone_register"
                          className="primary"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="phoneRegister"
                          id="phoneRegister"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="label-input" htmlFor="email_register">
                          Email
                        </label>
                        <input
                          type="email"
                          name="emailRegister"
                          id="emailRegister"
                          className="form-control"
                          required
                        />
                      </div>
                      <button type="submit" className="shop-go">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
