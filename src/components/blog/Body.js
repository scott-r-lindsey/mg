
import PropTypes from "prop-types";
import React from 'react';
import withWidth from '@material-ui/core/withWidth';

function Body({copy}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: copy }}></div>
  );
}

Body.propTypes = {
  copy: PropTypes.string.isRequired,
};

export default withWidth()(Body);

