import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import RandomCocktail from "./pages/RandomCocktail";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
function App() {
  return (
    <Router basename="/Know_Your_Cocktail">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/random" component={RandomCocktail} />
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
