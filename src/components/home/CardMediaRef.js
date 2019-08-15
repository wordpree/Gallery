import React from "react";
import { Link } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  [theme.breakpoints.up("lg")]: {
    media: {
      height: 375,
      width: 400
    }
  }
}));

export default function CardMediaRef({ to, image, title }) {
  const classes = useStyles();
  const CardMediaLink = React.forwardRef((props, ref) => (
    <Link ref={ref} {...props} to={to} />
  ));
  return (
    <CardMedia
      className={classes.media}
      component={CardMediaLink}
      image={image}
      title={title}
    />
  );
}
