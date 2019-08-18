import React from "react";
import {
  Container,
  Card,
  CardActions,
  Button,
  CardHeader
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  container: {
    background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
    padding: 0,
    height: "100vh",
    width: "100vw",
    position: "relative"
  },
  card: {
    width: "70%",
    height: "30%",
    background: "#8A744A",
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center"
  },
  action: {
    justifyContent: "center"
  },
  btn: {
    color: "#ECE1D9",
    "&:hover": {
      background: "#ECE0D8",
      color: "#8A744A"
    },
    padding: "0.75rem 1rem",
    marginTop: "1rem"
  },
  header: {
    color: "#ECE1D9"
  },
  title: {
    fontFamily: "'Arapey', serif",
    color: "#ECE1D9",
    fontSize: "1.5rem"
  },
  subheader: {
    fontFamily: "'Arapey', serif",
    color: "#ECE1D9",
    paddingTop: "0.5rem"
  }
});

export default function Error() {
  const classes = useStyles();
  const ButtonLink = React.forwardRef((props, ref) => (
    <Link ref={ref} {...props} to="/" />
  ));
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          classes={{ title: classes.title, subheader: classes.subheader }}
          style={{ color: "#fff" }}
          title="404 PAGE NOT FOUND"
          subheader="Whoops! You have got lost in gallery"
        />
        <CardActions className={classes.action}>
          <Button className={classes.btn} size="large" component={ButtonLink}>
            Go Home
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
