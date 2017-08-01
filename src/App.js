import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Chanpin from './component/Chanpin';
import NotFound from './component/NotFound';
import Product from './component/Product';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div className="container">
                  <Chanpin/>
                  <hr/>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/home" component={Home}/>
                      <Route path="/about" component={About}/>
                      <Route path="/chanpin" component={Product}/>
                      <Redirect from="/guanyu" to="/about"/>
                      <Route component={NotFound}/>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
