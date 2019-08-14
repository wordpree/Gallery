import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Loading from "./Loading";
import { useStateValue } from "./ApiDataProvider";
import Image from "./Image";

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.up("lg")]: {
    entryLayer: {
      overflow: "hidden",
      position: "relative",
      background: "#f1d18a"
    }
  },
  gridContainer: {
    background: "#232931"
  }
}));

export default function MainContent() {
  const classes = useStyles();
  const state = useStateValue();
  const [para, setPara] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
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
      <Grid container spacing={1} className={classes.gridContainer}>
        {state.gallery.map((item, index) => (
          <Grid item key={index} xs={12} md={4} sm={6} lg={1}>
            <Image data={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
