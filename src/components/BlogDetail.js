import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Item from './blog/Item.js';
import PropTypes from "prop-types";
import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import { useParams} from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { posts } from '../posts.json';
import Hero from './blog/Hero.js';
import Body from './blog/Body.js';
import { copy } from '../copy.json';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function BlogDetail({ width}) {
  const classes = useStyles();
  const { id } = useParams();
  const post = posts[id];
  const mobile = /xs/.test(width);
  const gutter = /xs|sm/.test(width) ? 2 : 3;

  /* eslint-disable */
  const {image, title, authorUrl, date, author} = post;

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container className="blog-detail" spacing={gutter}>

          { mobile ? null : <Grid key="hero-gap-1" item xs={2} /> }
          <Grid key="blog" className={"hero"} item xs={12} sm={8}>
            <Hero
              image={image}
              authorUrl={authorUrl}
              author={author}
            />
          </Grid>
          { mobile ? null : <Grid key="hero-gap-2" item xs={2} /> }

          { mobile ? null : <Grid key="title-gap-1" item xs={2} /> }
          <Grid key="title" className={"title"} item xs={12} sm={8}>
            <h2 className={"Dark"}>{ title }</h2>
          </Grid>
          { mobile ? null : <Grid key="title-gap-2" item xs={2} /> }

          { mobile ? null : <Grid key="body-gap-1" item xs={2} /> }
          <Grid key="body" className={"body"} item xs={12} sm={8}>
            <Body copy={copy} />
          </Grid>
          { mobile ? null : <Grid key="body-gap-2" item xs={2} /> }


          <Grid key="more-title" item xs={12}>
            { mobile
              ? <h2 className={"Dark more-title"}>More Posts</h2>
              : <h2 className={"Dark more-title"}>More from the blog</h2>
            }


          </Grid>

          {
            posts.slice(-3).map((value, index) => {
              return (
                 <Grid item
                  className={"more"}
                  sm={4}
                  xs={12}
                  key={'blog-page-' + index}>
                  <Item
                    id={index+1}
                    {...value}
                  />
                </Grid>
              )
            })
          }

          <Grid key="more-view-more" className={"more-view-more"} item xs={12}>
            <button className={"primary"}>View More</button>
          </Grid>

        </Grid>
      </div>
    </Container>
  );
}

BlogDetail.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(BlogDetail);

