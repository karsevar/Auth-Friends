import React from 'react';
import {Link, Route} from 'react-router-dom';

import Friends from './components/Friends';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Navigation'>
        <Link to='/friends'>Friends</Link>
        <Link to='/login'>Login</Link>
      </div>
      
      
      <Route path='/friends' component={Friends} />
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
