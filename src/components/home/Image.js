import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardActions, IconButton } from "@material-ui/core";
import { HeartOutline, Camera } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import CardMediaRef from "./CardMediaRef";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  cardHeader: {
    fontFamily: "'Arapey', serif",
    textAlign: "center"
  },
  iconBtn: {
    color: "#232931",
    "&:hover": {
      background: "#f73859"
    }
  },
  [theme.breakpoints.up("lg")]: {
    card: {
      maxWidth: 500,
      position: "absolute",
      "&:hover": {
        zIndex: 999,
        transform: "rotate(0) scale(1.2)"
      },
      transition: "all 0.8s ease-in-out",
      WebkitTransition: "all 0.8s ease-in-out"
    },
    card0: { left: "2%", top: "5%", transform: "rotate(16deg) scale(1)" },
    card1: { left: "5%", top: "10%", transform: "rotate(16deg) scale(1)" },
    card2: { left: "9%", top: "18%", transform: "rotate(16deg) scale(1)" },
    card3: { left: "12%", top: "22%", transform: "rotate(16deg) scale(1)" },
    card4: { left: "18%", top: "28%", transform: "rotate(16deg) scale(1)" },
    card5: { left: "25%", top: "35%", transform: "rotate(16deg) scale(1)" },
    card6: { left: "32%", top: "40%", transform: "rotate(16deg) scale(1)" },
    card7: { left: "40%", top: "35%", transform: "rotate(16deg) scale(1)" },
    card8: { left: "46%", top: "28%", transform: "rotate(16deg) scale(1)" },
    card9: { left: "52%", top: "22%", transform: "rotate(16deg) scale(1)" },
    card10: { left: "60%", top: "18%", transform: "rotate(16deg) scale(1)" },
    card11: { left: "69%", top: "10%", transform: "rotate(16deg) scale(1)" },
    card12: { left: "77%", top: "5%", transform: "rotate(16deg) scale(1)" }
  }
}));

export default function Image({ data, index }) {
  const classes = useStyles();
  let card = "card" + index;
  return (
    <Card className={`${classes.card} ${classes[card]}`}>
      <CardActions>
        <IconButton aria-label="add to favorites" className={classes.iconBtn}>
          <HeartOutline />
        </IconButton>
        <div style={{ flexGrow: 1 }} />
        <Link to={`/${data.title}`}>
          <IconButton aria-label="more photos" className={classes.iconBtn}>
            <Camera />
          </IconButton>
        </Link>
      </CardActions>
      <CardMediaRef to={`/${data.title}`} image={data.url} title={data.title} />
      <CardHeader classes={{ title: classes.cardHeader }} title={data.title} />
    </Card>
  );
}
