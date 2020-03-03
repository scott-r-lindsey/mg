
import PropTypes from "prop-types";
import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import { Link } from 'react-router-dom';

function Hero({image, authorUrl, author, width}) {
  return (
    <div>
      <img alt="" src={image} />
      <time dateTime="2018-08-07">August 7, 2018</time>
      <Link to={ authorUrl }>By {author}</Link>
    </div>
  );
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(Hero);
