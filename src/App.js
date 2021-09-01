import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
