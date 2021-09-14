import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import { userDetails } from "./userDetails";
import { Profiles } from "./components/Profiles/Profiles";
import Adduser from "./components/Adduser/Adduser";
import Editusers from "./components/Editusers/Editusers";
import Contactus from "./components/Contactus/Contactus";

export const context = createContext(null);

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

function Routing() {
  const [user, setUser] = useState(userDetails);
  const [username, setName] = useState("");
  const [image, setImage] = useState("");

  const value = { user, setUser, username, setName, image, setImage };
  return (
    <Router>
      <context.Provider value={value}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/profile/:id" exact component={Profiles} />
          <Route path="/edit/:id" exact component={Editusers} />
          <Route path="/create" exact component={Adduser} />
          <Route path="/contact-us" exact component={Contactus} />
        </Switch>
      </context.Provider>
    </Router>
  );
}

export default App;
