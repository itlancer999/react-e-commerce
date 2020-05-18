import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from  './components/Home';
import Shop  from  './components/Shop';
import Navigation from './components/Navigation';

import Layout from './components/Layout';
import { Provider } from "react-redux";
import store from "./store";


class App extends Component {

  
  render(){
  return (
    <Provider store={store}>
    <React.Fragment>
    
    <Navigation/>
    <Layout>
      <Router>
        <Switch>
          <Route exact path ="/" component= {Home} />
  
          <Route path ="/shop" component={Shop} />
          

        
        </Switch>
      </Router>
    </Layout>
    
    </React.Fragment>
    </Provider>
  );
}
}
export default App;
