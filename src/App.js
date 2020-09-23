import React from 'react';
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import ArcadeGames from './pages/ArcadeGames';
import GameStore from './pages/GameStore';
import Profile from './pages/Profile';

const store = createStore(reducers, applyMiddleware(thunk));



const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-5" id="main-body">
        {props.children}
      </div>
    </>
  )
}

const routes =[
  {
    path: '/',
    exact: true,
    main: () => <Layout>
      <Home />
    </Layout>
  },
  {
    path: '/arcadegames',
    exact: false,
    main: () => <Layout>
      <ArcadeGames />
    </Layout>
  },
  {
    path: '/gamestore',
    exact: false,
    main: () => <Layout>
      <GameStore />
    </Layout>
  },
  {
    path: '/profile',
    exact: false,
    main: () => <Layout>
      <Profile />
    </Layout>
  }
]

const getRoutes = () => {
  return routes.map((route, index) => {
    return <Route
      exact={route.exact}
      key={index}
      path={route.path}>
      {route.main}
    </Route>
  })
}

function App() {
  return  <Provider store={store}>
            <Router>
              <Switch>
                {getRoutes()}
              </Switch>
            </Router>
          </Provider>
}

export default App;
