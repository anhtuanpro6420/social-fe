import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Products from "./containers/Products/Products";
import auth from "./containers/Auth/Auth";
// import Signup from './containers/Signup/Signup';

const Signup = React.lazy(() => import("./containers/Signup/Signup"));

function App() {
  let routes = (
    <Switch>
      <Route path="/auth" component={auth} />
      <Route
        path="/sign-up"
        render={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
        )}
      />
      <Route path="/" exact component={Products} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Header />
      <Main>{routes}</Main>
      <Footer />
    </div>
  );
}

export default App;
