import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "src/components/auth/Login";
import Register from "src/components/auth/Register";
import "../assets/style/App.css";
import { Provider } from "react-redux";
import setAuthToken from "src/utils/setAuthToken";
import { loadUser } from "src/actions/auth";
import Dashboard from "src/components/dashboard/Dashboard";
import PrivateRoute from "src/components/routing/PrivateRoute";
import CreateProfile from "src/components/profile-form/CreateProfile";
import EditProfile from "src/components/profile-form/EditProfile";
import AddExperience from "src/components/profile-form/AddExperience";
import AddEducation from "src/components/profile-form/AddEducation";
import Landing from "./Landing";
import NavBar from "./NavBar";
import store from "../store";
import Alert from "./Alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />

              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />

              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />

              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};

export default App;
