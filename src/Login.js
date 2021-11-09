import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./FileResduce/Slice";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Private = (props) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    rememberMe: "false",
  });
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });

  // const handleLogin = () => {
  //   login();
  //   props.history.push("/public");
  // };

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
    // localStorage.removeItem("user");
    console.log(info);
    login();
    props.history.push("/login/public");

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
                <h3 className="text-center">
                  <AccountCircleIcon
                    className="mr-1"
                    color="primary"
                    fontSize="large"
                    height={"54"}
                  />
                  Login
                </h3>
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
                      <input type="checkbox" id="checkbox" name="checkbox" />
                    </span>
                    <span> Remember me</span>
                  </label>
                  <br />

                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary btn-md"
                    // onClick={handleLogin}
                  />
                </div>
                <div id="register-link" className="text-right">
                  Forgot.
                  <Link to="/changepassword">Password?</Link>
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
