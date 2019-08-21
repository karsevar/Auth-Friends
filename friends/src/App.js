import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Button, Menu} from 'semantic-ui-react';

import Friends from './components/Friends';
import Login from './components/Login';
import ProtectedRoute from './auth/ProtectedRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu>
        <Menu.Item>
          <Link to='/friends'><Button>Friends</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/'><Button>Login</Button></Link>
        </Menu.Item>
      </Menu>
      
      
      
      <ProtectedRoute exact path='/friends' component={Friends} />
      <Route exact path='/' component={Login} />
    </div>
  );
}

export default App;
