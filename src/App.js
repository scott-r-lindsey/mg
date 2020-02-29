import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CambriaGrove from './component/CambriaGrove.js';

function App() {

  const [posts, setPosts] = useState(['posts']);

  //setPosts(['foo']);

  return (
    <div className="App">
      <header className="App-header">
        <CambriaGrove />
      </header>
    </div>
  );
}

export default App;
