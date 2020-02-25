import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderHandler from "./components/hoc/OrderHandler";
import PersistentDrawerLeft from "./components/navigation";

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft>
        <Switch>
          <Route path="/" exact component={OrderHandler} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </PersistentDrawerLeft>
    </div>
  );
}

export default App;
