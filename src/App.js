import React from 'react';
import { Provider } from "react-redux";
import reducers from "./redux/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';

const store = createStore(reducers, applyMiddleware(thunk));



const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-5">
        {props.children}
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="/game">
              <Layout>
                <Game />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
