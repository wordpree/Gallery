import React, { useState } from "react";
import {
  Dialog,
  Card,
  CardMedia,
  CardActions,
  IconButton
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "mdi-material-ui";
import { useStateValue } from "../ApiDataProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    width: "100%",
    height: "100%"
  },
  card: {
    width: "100%",
    height: "100%"
  },
  sliders: {
    height: "60vh"
  },
  slide: {
    opacity: 0,
    position: "absolute",
    height: "100%",
    width: "100%",
    transition: "opacity 0.5s ease-in-out"
  },
  current: {
    opacity: 1
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  }
});

export default function GridListsDialog({ open, close, index }) {
  const classes = useStyles();
  const state = useStateValue();
  console.log(index);
  const [arrow, setArrow] = useState(0);
  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      classes={{ container: classes.container }}
      open={open}
      onClose={close}
    >
      <div className={classes.sliders}>
        {state.gallery.map((item, key) => (
          <div
            className={classes.slide}
            key={key}
            style={{ opacity: key === index ? 1 : 0 }}
          >
            <Card className={classes.card}>
              <CardActions>
                <IconButton>
                  <ArrowLeft />
                </IconButton>
                <div style={{ flexGrow: 1 }} />
                <IconButton>
                  <ArrowRight />
                </IconButton>
              </CardActions>
              <CardMedia image={item.urlHd} className={classes.media} />
            </Card>
          </div>
        ))}
      </div>
    </Dialog>
  );
}
