import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './css/App.css';

import Header from "./components/Header/Header.component";
import Home from "./pages/Home/Home.page";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='app'>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    );
  }
}

export default App;
