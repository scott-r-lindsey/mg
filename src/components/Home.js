import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Home() {

  return(
    <div>
      <Link to="/gridA" >Grid A</Link>
      <Link to="/gridB" >Grid B</Link>
      <Link to="/gridC" >Grid C</Link>
      <Link to="/blog" >Blog</Link>
    </div>
  );
}

