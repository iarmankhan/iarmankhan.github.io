import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './assets/css/App.css';

class App extends Component{
  constructor() {
    super();
  }

  render() {
    return (
        <div className='app'>
          <Switch>
            {/*<Route exact path='/' />*/}
          </Switch>
        </div>
    );
  }
}

export default App;
