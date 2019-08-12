import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:gallery" component={Gallery} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
