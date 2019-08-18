import React, { useState } from "react";
import { useStateValue } from "../ApiDataProvider";
import Loading from "../Loading";
import {
  Fab,
  GridList,
  GridListTile,
  Dialog,
  Card,
  CardMedia,
  Zoom
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "mdi-material-ui";
import useQueryMedia from "@material-ui/core/useMediaQuery";
import PrevPageFab from "../PrevPageFab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  sliders: {
    height: "80vh"
  },
  slide: {
    opacity: 0,
    position: "absolute",
    height: "100%",
    width: "100%",
    transition: "opacity 0.8s ease-in-out"
  },
  card: {
    width: "100%",
    height: "100%"
  },
  media: {
    width: "100%",
    height: "100%"
  },
  iconBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.4)",
    zIndex: 999,
    color: "#fff",
    "&:hover": {
      background: "#f73859"
    }
  },
  left: {
    left: "0%"
  },
  right: {
    right: "0%"
  }
});

export default function GridLists() {
  const classes = useStyles();
  const state = useStateValue();
  const md = useQueryMedia("(min-width:760px)");
  const lg = useQueryMedia("(min-width:1026px)");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const i = { acc: 0, cols: 0 };
  let cellHeight = lg ? 335 : md ? 250 : 180;

  const imageSArg = () => {
    const cols = () => Math.ceil(Math.random() * 2);
    i.cols = cols();
    if (i.acc % 3 === 0) {
      i.acc = 0;
    }
    if (i.acc % 3 === 2) {
      i.cols = 1;
    }
    i.acc = i.acc + i.cols;
    return i.cols;
  };

  return state.loading && state.gallery.length === 0 ? (
    <Loading />
  ) : (
    <>
      <GridList cols={3} cellHeight={cellHeight} style={{ margin: 0 }}>
        {state.gallery.map((item, index) => {
          const cols = imageSArg();
          return (
            <GridListTile
              key={index}
              cols={cols}
              onClick={() => {
                setOpen(true);
                setIndex(index);
              }}
            >
              <img src={item.url} alt={item.title} />
            </GridListTile>
          );
        })}
      </GridList>
      <Dialog
        TransitionComponent={Zoom}
        transitionDuration={500}
        fullWidth
        maxWidth="xl"
        classes={{ container: classes.container }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={classes.sliders}>
          {state.gallery.map((item, key) => (
            <div
              className={classes.slide}
              key={key}
              style={{ opacity: key === index ? 1 : 0 }}
            >
              <Card className={classes.card}>
                <Fab
                  className={`${classes.iconBtn} ${classes.left}`}
                  onClick={() =>
                    setIndex(prevIndex => {
                      prevIndex =
                        prevIndex === 0
                          ? state.gallery.length - 1
                          : prevIndex - 1;
                      return prevIndex;
                    })
                  }
                >
                  <ArrowLeft />
                </Fab>
                <Fab
                  className={`${classes.iconBtn} ${classes.right}`}
                  onClick={() =>
                    setIndex(prevIndex => {
                      prevIndex =
                        prevIndex === state.gallery.length - 1
                          ? 0
                          : prevIndex + 1;
                      return prevIndex;
                    })
                  }
                >
                  <ArrowRight />
                </Fab>
                <CardMedia
                  image={lg ? item.url : item.urlMob}
                  className={classes.media}
                />
              </Card>
            </div>
          ))}
        </div>
      </Dialog>
      <PrevPageFab to="/" />
    </>
  );
}
