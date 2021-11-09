import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./utils";

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? <Component {...props} /> : <Redirect to="/private" />
        }
      />
    </div>
  );
};

export default PrivateRouter;
