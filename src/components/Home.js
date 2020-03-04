import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Home() {

  return(
    <div className={"dev-landing"}>
      <ul>
        <li><Link to="/gridA" >Grid A</Link></li>
        <li><Link to="/gridB" >Grid B</Link></li>
        <li><Link to="/blog" >Blog</Link></li>
      </ul>
    </div>
  );
}

