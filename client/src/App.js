import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Birthday from "./pages/Birthday/index";
import Cakes from "./pages/Cakes/index";
import Cookies from "./pages/Cookies/index";
import Cupcakes from "./pages/Cupcakes/index";
import Desserts from "./pages/Desserts/index";
import GetAQuote from "./pages/GetAQuote/index";
import Graduation from "./pages/Graduation/index";
import Occassions from "./pages/Occassions/index";
import OtherDesserts from "./pages/OtherDesserts/index";
import OtherOccassions from "./pages/OtherOccassions/index";
import Wedding from "./pages/Wedding/index";
import Form from "./pages/Form/index";


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/birthday" component={Birthday} />
      <Route exact path="/cakes" component={Cakes} />
      <Route exact path="/cookies" component={Cookies} />
      <Route exact path="/cupcakes" component={Cupcakes} />
      <Route exact path="/all-desserts" component={Desserts} />
      <Route exact path="/get-a-quote" component={GetAQuote} />
      <Route exact path="/graduation" component={Graduation} />
      <Route exact path="/all-occassions" component={Occassions} />
      <Route exact path="/other-desserts" component={OtherDesserts} />
      <Route exact path="/other-occassions" component={OtherOccassions} />
      <Route exact path="/wedding" component={Wedding} />
      <Route exact path="/form" component={Form} />

    </Switch>
  </Router>
)

export default App;
