import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Checkout from './component/ChckoutForm/Checkout';
import Home from './container/Home';
import Rooms from './container/Rooms';
import SingleRoom from './container/SingleRoom';
import Error from './container/Error';
import Navbar from './component/Navbar';
import Auth from './container/Auth/Auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/checkout" component={Checkout} />
          <Redirect from="/" to="/home" />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
