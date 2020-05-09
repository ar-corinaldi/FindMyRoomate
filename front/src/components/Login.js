import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div
                className="col-lg-6 d-none d-lg-block bg-login-image"
                id="bg-login-image"
              >
                {" "}
                <img
                  width="450"
                  height="600"
                  src="https://user-images.githubusercontent.com/26877363/79059180-9ea95180-7c3c-11ea-9408-02121b258842.jpg"
                  alt="Prendas de vestir"
                ></img>
              </div>

              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Inicie su sesión</h1>
                  </div>

                  <form method="POST" action="/login">
                    <div className="form-group">
                      <label className="label-input" htmlFor="username">
                        Nombre de usuario
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        id="username"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="label-input" htmlFor="password">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        required
                      />
                    </div>
                    <button type="submit" className="shop-go">
                      Entrar
                    </button>
                  </form>
                  <div className="register">
                    <Link
                      style={{ WebkitTextFillColor: "black" }}
                      className="label-input"
                      to="/register"
                    >
                      ¿No eres un miembro? Registrate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
