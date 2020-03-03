import React from 'react';

import PropTypes from "prop-types";

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import withWidth from "@material-ui/core/withWidth";

import {
  Link
} from "react-router-dom";

function Pagination({width}){

  return (
    <div className="pagination">
      {
        /xs/.test(width) ||
        <Link key="skip-prev" to="/blog/details/1" className={"disabled icon"}>
          <SkipPreviousIcon fontSize="large" />
        </Link>
      }
      <Link key="before" to="/blog/details/1" className={"disabled icon"}>
        <NavigateBeforeIcon fontSize="large" />
      </Link>
      <Link key="link-1" to="/blog/details/1" className={"active numeric"}>
        1
      </Link>
      <Link key="link-2" to="/blog/details/2" className={"numeric"}>
        2
      </Link>
      <Link key="link-3" to="/blog/details/3" className={"numeric"}>
        3
      </Link>
      <Link key="link-4" to="/blog/details/4" className={"numeric"}>
        4
      </Link>
      <Link key="link-5" to="/blog/details/5" className={"numeric"}>
        5
      </Link>
      <Link key="prev" to="/blog/details/1" className={"disabled icon"}>
        <NavigateNextIcon fontSize="large" />
      </Link>
      {
        /xs/.test(width) ||
        <Link to="/blog/details/1" className={"disabled icon"}>
          <SkipNextIcon fontSize="large" />
        </Link>
      }
    </div>
  );
}

Pagination.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(Pagination);

