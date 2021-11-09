import React, { createContext } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Password from "./Password";
import history from "./history";
import Private from "./Private";
import Home from "./Home";
import Public from "./Public";
import Login from "./Login";
import LogOut from "./LogOut";
import Navbar from "./Navbar";
import Form2 from "./Form2";
import Register from "./Register";

store.subscribe(() => console.log(store.getState()));
const HolderName = createContext();
const Visit = createContext();
const Hello = createContext();

const App = () => {
  return (
    <div>
      <HolderName.Provider value="Visit Again">
        <Visit.Provider value="Our Website">
          <Hello.Provider value="React Router">
            <Provider store={store}>
              <Router history={history}>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/changepassword" component={Password} />
                <Route exact path="/login/public" component={Public} />
                <Route exact path="/public" component={Public} />
                <Route exact path="/private" component={Private} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={LogOut} />
                <Route exact path="/materialform" component={Form2} />
                <Route exact path="/register" component={Register} />
              </Router>
            </Provider>
          </Hello.Provider>
        </Visit.Provider>
      </HolderName.Provider>
    </div>
  );
};

export default App;
export { HolderName };
export { Visit };
export { Hello };
