import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderHandler from "./components/hoc/OrderHandler";
import EditPictures from "./components/pages/EditPictures";
import EditTexts from "./components/pages/EditTexts";
import SandwichHandler from "./components/hoc/SandwichHandler";
import PersistentDrawerLeft from "./components/navigation";

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft>
        <Switch>
          <Route path="/" exact component={OrderHandler} />
          <Route
            path="/overview/orders/dishes"
            exact
            component={OrderHandler}
          />
          <Route
            path="/overview/orders/sandwiches"
            exact
            component={OrderHandler}
          />
          <Route
            path="/edit/orders/sandwiches"
            exact
            component={SandwichHandler}
          />
          <Route path="/edit/orders/dishes" exact component={OrderHandler} />
          <Route path="/edit/pictures" component={EditPictures} />
          <Route path="/edit/texts" component={EditTexts} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </PersistentDrawerLeft>
    </div>
  );
}

export default App;
