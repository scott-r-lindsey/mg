import React, { useState } from 'react';
import './App.scss';

//import './colors.scss'

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
