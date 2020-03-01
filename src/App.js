import React, { useState } from 'react';
import './styles/App.scss';


import CambriaGrove from './components/CambriaGrove.js';

function App() {

  const [posts, setPosts] = useState(['posts']);

  //setPosts(['foo']);

  return (
    <div>
      <CambriaGrove />
    </div>
  );
}

export default App;
