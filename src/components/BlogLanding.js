import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Item from './blog/Item.js';
import PropTypes from "prop-types";
import React from 'react';
import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from '@material-ui/core/styles';
import { posts } from '../posts.json';

import Featured from './blog/Featured.js';
import Newsletter from './blog/Newsletter.js';
import Pagination from './blog/Pagination.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function BlogLanding({ width }) {
  const classes = useStyles();

  const mobile = /xs|sm/.test(width);
  const gutter = mobile ? 2 : 3;

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container className="blog-landing" spacing={gutter}>

          <Grid key="blog" item xs={12}>
            <h1 className="Dark">Blog</h1>
          </Grid>


          <Grid key="blog-featured" item xs={12} sm={8}>
            <Featured
              id={0}
              {...posts[0]}
            />
          </Grid>

          {
            /xs/.test(width) ? null :
            <Grid key="desktop-news" item xs={4}>
              <Newsletter />
            </Grid>
          }

          {posts.slice(-9).map((value, index) => {
            return <Grid item xs={12} sm={4} key={'blog-page-' + index}>
              <Item
                id={index+1}
                {...value}
              />
            </Grid>
            })
          }
          <Pagination key="pagination"/>

          {
            /xs/.test(width) ?  <Newsletter form={true} /> : null
          }

        </Grid>
      </div>
    </Container>
  );
}

BlogLanding.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(BlogLanding);
