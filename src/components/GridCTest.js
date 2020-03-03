import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid({ width }) {
  const classes = useStyles();

  const mobile = /xs|sm/.test(width);
  console.log(mobile);

  const gutter = mobile ? 2 : 3;

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={gutter}>
          <Grid item xs={12}>
            <div style={{width: '100%', backgroundColor: 'blue'}}>foo</div>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <div style={{width: '100%', backgroundColor: 'blue'}}>foo</div>
          </Grid>
          <Grid item xs={3}>
            <Paper variant="outlined" className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

CenteredGrid.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(CenteredGrid);
