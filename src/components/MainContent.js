import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton
} from "@material-ui/core";
import { HeartOutline, Camera } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";
import { useStateValue } from "./context";

const useStyles = makeStyles({
  entryLayer: {
    overflow: "hidden",
    position: "relative"
  },
  wrapper: {},
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
  media: {
    height: 375,
    width: 400
  },
  cardHeader: {
    fontFamily: "'Arapey', serif",
    textAlign: "center"
  },
  card0: { left: "0%", top: "3%", transform: "rotate(16deg) scale(1)" },
  card1: { left: "3%", top: "10%", transform: "rotate(16deg) scale(1)" },
  card2: { left: "8%", top: "18%", transform: "rotate(16deg) scale(1)" },
  card3: { left: "12%", top: "22%", transform: "rotate(16deg) scale(1)" },
  card4: { left: "18%", top: "28%", transform: "rotate(16deg) scale(1)" },
  card5: { left: "25%", top: "35%", transform: "rotate(16deg) scale(1)" },
  card6: { left: "32%", top: "40%", transform: "rotate(16deg) scale(1)" },
  card7: { left: "40%", top: "35%", transform: "rotate(16deg) scale(1)" },
  card8: { left: "46%", top: "28%", transform: "rotate(16deg) scale(1)" },
  card9: { left: "52%", top: "22%", transform: "rotate(16deg) scale(1)" },
  card10: { left: "60%", top: "18%", transform: "rotate(16deg) scale(1)" },
  card11: { left: "69%", top: "10%", transform: "rotate(16deg) scale(1)" },
  card12: { left: "77%", top: "3%", transform: "rotate(16deg) scale(1)" }
});
const width = window.innerWidth;
const height = window.innerHeight;
export default function MainContent() {
  const [para, setPara] = useState({
    width: width,
    height: height
  });
  const classes = useStyles();
  const state = useStateValue();
  useEffect(() => {
    function handleResize() {
      setPara({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return state.loading && state.gallery.length === 0 ? (
    <Loading />
  ) : (
    <div
      className={classes.entryLayer}
      style={{ height: `${para.height}px`, width: `${para.width}px` }}
    >
      <div className={classes.wrapper}>
        {state.gallery.map((item, index) => {
          let card = "card" + index;
          return (
            <div key={index} className={classes.cardWrapper}>
              <Card className={`${classes.card} ${classes[card]}`}>
                <CardHeader
                  classes={{ title: classes.cardHeader }}
                  title={item.title}
                />
                <CardMedia
                  className={classes.media}
                  image={item.url}
                  title={item.title}
                />
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <HeartOutline />
                  </IconButton>
                  <div style={{ flexGrow: 1 }} />
                  <IconButton aria-label="more photos">
                    <Camera />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
