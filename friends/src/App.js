import React from 'react';
import {Link, Route} from 'react-router-dom';

import Friends from './components/Friends';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Navigation'>
        <Link to='/friends'>Friends</Link>
      </div>
      
      
      <Route path='/friends' component={Friends} />
    </div>
  );
}

export default App;
