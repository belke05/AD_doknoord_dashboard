import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderHandler from "./components/hoc/OrderHandler";
import EditPictures from "./components/pages/EditPictures";
import EditTexts from "./components/pages/EditTexts";
import SandwichHandler from "./components/hoc/SandwichHandler";
import PersistentDrawerLeft from "./components/navigation";
import FormCustom from "./components/FormCustom";
import UploadKasboek from "./components/pages/UploadKasboek";
import KasBoek from "./components/pages/Kasboek";

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
          <Route path="/overview/kasboek" exact component={KasBoek} />
          <Route path="/edit/orders/dishes" exact component={OrderHandler} />
          <Route path="/edit/pictures" component={EditPictures} />
          <Route path="/edit/texts" component={EditTexts} />
          <Route path="/upload/kasboek" component={UploadKasboek} />
          <Route path="/testing" component={FormCustom} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </PersistentDrawerLeft>
    </div>
  );
}

export default App;
