import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Newsletter({form}){

  const className = form ? 'newsletter-w-form' : 'newsletter';
  const classes = useStyles();

  return (
    <div className={className}>
      <h2 className={"Dark"}>Stay in touch with Cambia Grove</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      { form ?
          <div className={"newsletter-form"}>
            <form className={classes.root} noValidate autoComplete="off">

              <InputBase
                placeholder="Name"
                inputProps={{ 'aria-label': 'naked' }}
              />
              <InputBase
                placeholder="Company"
                inputProps={{ 'aria-label': 'naked' }}
              />
              <InputBase
                placeholder="Job Title"
                inputProps={{ 'aria-label': 'naked' }}
              />
              <InputBase
                placeholder="Email address"
                inputProps={{ 'aria-label': 'naked' }}
              />

            </form>
          </div>
        : null
      }

      <button className={"primary"}>Sign up</button>
    </div>
  );
}

Newsletter.propTypes = {
  form: PropTypes.bool
};

