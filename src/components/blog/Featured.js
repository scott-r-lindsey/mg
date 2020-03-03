import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Featured({
    id, image, title, authorUrl, date, author}){
  return (
    <div className="hero">
      <Link to={ "/blog/" + id }>
        <img alt="" src={image} />
        <div className="featured-overlay">FEATURED</div>
      </Link>
      <time dateTime="2018-08-07">August 7, 2018</time>
      <Link to={ authorUrl }>
        By { author }
      </Link>
      <Link to={ "/blog/" + id }>
          <h2>{ title }</h2>
      </Link>
    </div>
  );

}

Featured.propTypes ={
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
