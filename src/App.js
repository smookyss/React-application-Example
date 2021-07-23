import Navbar from "./Components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Product";
import SignUp from "./Components/pages/signUp";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/Sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
