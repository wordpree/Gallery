import React, { useState } from "react";
import Header from "../components/Header";
import about from "../assets/images/about.jpg";
import {
  Grid,
  Card,
  CardMedia,
  Badge,
  Container,
  Typography,
  IconButton
} from "@material-ui/core";
import { HeartOutline } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    background: "#F1D18A",
    padding: "1rem 2rem"
  },
  grid1: {
    margin: "1rem auto",
    padding: "1.25rem",
    textAlign: "center"
  },
  Badge: {},
  card: {
    mxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "65.75%"
  },
  typo: {
    color: "#232931",
    fontFamily: "'Arapey', serif",
    padding: "0.5rem"
  }
}));

export default function About() {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Header />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.grid1}
      >
        <Grid item xs={12} md={6}>
          <Typography className={classes.typo} variant="h4">
            All you know me that is a gallery
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <IconButton onClick={() => setCount(prevCount => prevCount + 1)}>
            <Badge
              className={classes.Badge}
              badgeContent={count}
              color="primary"
            >
              <HeartOutline fontSize="large" />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardMedia image={about} className={classes.media} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography className={classes.typo} variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            neque ornare aenean euismod elementum nisi quis eleifend quam. In
            hac habitasse platea dictumst vestibulum rhoncus est. Mauris rhoncus
            aenean vel elit scelerisque mauris pellentesque. Neque ornare aenean
            euismod elementum nisi. Quam lacus suspendisse faucibus interdum
            posuere lorem ipsum. Amet venenatis urna cursus eget nunc
            scelerisque viverra mauris in. Elementum nisi quis eleifend quam
            adipiscing vitae proin sagittis nisl.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.typo} variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
            habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
            At varius vel pharetra vel turpis. Condimentum id venenatis a
            condimentum vitae sapien. Sed viverra ipsum nunc aliquet bibendum
            enim facilisis gravida. Faucibus vitae aliquet nec ullamcorper sit
            amet risus nullam eget.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
