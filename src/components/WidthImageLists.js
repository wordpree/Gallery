import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useQueryMedia from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  entryLayer: {
    overflow: "hidden",
    position: "relative",
    background: "#f1d18a"
  }
}));

function WithImageLists(Component) {
  return function Enhancer() {
    const classes = useStyles();
    const lg = useQueryMedia("(min-width:1026px)");
    const [dimension, setDimension] = useState({
      height: window.innerHeight,
      width: window.innerWidth
    });
    useEffect(() => {
      function handleResize() {
        setDimension({
          height: window.innerHeight,
          width: window.innerWidth
        });
      }
      if (lg) {
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
    }, [lg]);
    return lg ? (
      <div
        className={classes.entryLayer}
        style={{ height: `${dimension.height}px`, width: `${dimension.width}` }}
      >
        <Component />
      </div>
    ) : (
      <Component />
    );
  };
}

export default WithImageLists;
