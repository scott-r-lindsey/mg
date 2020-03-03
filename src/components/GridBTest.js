import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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

function setSpacing() {
    const width = window.innerWidth;
    if (width > 600) {
          return 4;
    } else {
          return 2;
    }
}

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={setSpacing()}>
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
