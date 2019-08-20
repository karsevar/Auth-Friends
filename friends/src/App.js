import React from 'react';
import {Link, Route} from 'react-router-dom';

import Friends from './components/Friends';
import Login from './components/Login';
import ProtectedRoute from './auth/ProtectedRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Navigation'>
        <Link to='/friends'>Friends</Link>
        <Link to='/'>Login</Link>
      </div>
      
      
      <ProtectedRoute exact path='/friends' component={Friends} />
      <Route exact path='/' component={Login} />
    </div>
  );
}

export default App;
