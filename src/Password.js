import React, { useState } from "react";
import { useDispatch } from "react-redux";

import history from "./history";

const Password = () => {
  const [change, setChange] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setChange({ ...change, [name]: value });
    // setValue(name, value);
  };
  console.log(`change`, change);

  const onSubmit = () => {
    // e.preventDefault();
    localStorage.setItem("CurrentPassword", change?.currentPassword);
    localStorage.setItem("NewPassword", change?.newPassword);
    localStorage.setItem("ConfirmPassword", change?.confirmPassword);
    console.log(change);

    dispatch(
      change({
        currentPassword: change?.currentPassword,
        newPassword: change?.newPassword,
        passconfirmPasswordword: change?.confirmPassword,
      })
    );
  };

  return (
    <div class="container py-5">
      <div className="col-md-6 offset-md-3">
        <span className="anchor" id="formChangePassword" />
        <div className="card card-outline-secondary pwdchange">
          <div className="card-header">
            <h3 className="mb-0">Change Password</h3>
          </div>
          <div className="card-body">
            <form className="form" autoComplete="off" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="inputPasswordOld">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  className="form-control"
                  id="currentPassword"
                  value={change.currentPassword}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNew">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  className="form-control"
                  id="newPassword"
                  value={change.newPassword}
                  onChange={handleInput}
                />
                <span className="form-text small text-muted">
                  The password must be 8-20 characters, and must <em>not</em>{" "}
                  contain spaces.
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="inputPasswordNewVerify">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  id="confirmPassword"
                  value={change.confirmPassword}
                  onChange={handleInput}
                />
                <span className="form-text small text-muted">
                  To confirm, type the new password again.
                </span>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  onClick={() => history.push("/private")}
                  className="btn btn-success float-right"
                >
                  Save
                </button>
              </div>
            </form>
            <button className="btn btn-danger" onClick={() => history.back()}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
