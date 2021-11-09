import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "./FileResduce/Slice";
// import { useForm } from "react-hook-form";

const Form = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", info?.email);
    localStorage.setItem("Password", info?.password);
    console.log(info);

    dispatch(
      login({
        email: info?.email,
        password: info?.password,
      })
    );
  };

  return (
    <div>
      <div id="login">
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={handleSubmit}>
                  <h3 className="text-center">Login</h3>
                  <div className="form-group mt-5">
                    <label htmlFor="username">Email :</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={info.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={info.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group remember">
                    <label htmlFor="remember-me">
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                      <span> Remember me</span>
                    </label>
                    <br />

                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary btn-md"
                      defaultValue="submit"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    Forgot<Link to="#"> Password?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
