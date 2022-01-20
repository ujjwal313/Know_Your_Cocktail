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
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Know_Your_Cocktail/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/random" component={RandomCocktail} />
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route exact path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
