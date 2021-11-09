import { configureStore } from "@reduxjs/toolkit";
import FileReduce from "./FileResduce/Slice";

const store = configureStore({
  reducer: {
    email: FileReduce,
  },
});

export default store;



//  form



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [record, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...info, id: new Date().getTime().toString() };
    console.log(record);
    // localStorage.setInfo("info", JSON.stringify(info));
    setRecord([...record, newRecord]);
    // localStorage.setItem("name", JSON.stringify(value));
    console.log(localStorage.getItem("record"));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={info.email}
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={info.password}
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                className="custom-control-input"
                id="customCheck1"
                value={info.checkbox}
                onChange={handleInput}
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <Link href="#">password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;




{/* < form store > */ }




import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./FileResduce/Slice";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Private = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  // Provider;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
    setValue(name, value);
  };
  console.log(`info`, info);

  const onSubmit = (e) => {
    // e.preventDefault();
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
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form
                id="login-form"
                className="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3 className="text-center">Login</h3>
                <div className="form-group mt-5">
                  <label htmlFor="username">Email :</label>
                  <br />
                  <input
                    id="email"
                    name="email"
                    className="form-control"
                    value={info.email}
                    type="email"
                    onChange={handleInput}
                    ref={register("email", { required: true })}
                  />
                  {errors?.email?.type === "required" && (
                    <p>Email is required</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={info.password}
                    onChange={handleInput}
                    ref={register("password", { required: true })}
                  />
                  {errors?.password?.type === "required" && (
                    <p>password is required</p>
                  )}
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
                  Forgot.
                  <Link to="/password">Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Private;




{/* <  Navbar  > */ }





import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink className="nav-item" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/login">
                Private
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/private">
                Private Form
              </NavLink>
            </li>
          </ul>
          <div className="hamburger-menu">
            <NavLink to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
