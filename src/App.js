import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
import Destination from "./Component/Destination/Destination.js";
import News from "./Component/News/News";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import Booking from "./Component/Booking/Booking";
import Resturent from "./Component/Resturent/Resturent";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
export const CategoryContext = createContext();
export const UserContext = createContext();
function App() {
  const [category, setCategory] = useState("cox'sbazzer");
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app-area">
      <CategoryContext.Provider value={[category, setCategory]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/blog">
                <Blog></Blog>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/booking">
                <Booking></Booking>
              </Route>
              <Route path="/destination">
                <Destination></Destination>
              </Route>
              <PrivateRoute path="/resturent">
                <Resturent></Resturent>
              </PrivateRoute>
              <Route path="/news">
                <News></News>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
