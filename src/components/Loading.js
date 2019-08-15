import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  load: {
    background: "#232931",
    width: "100vw",
    height: "100vh",
    position: "relative"
  },
  progress: {
    position: "absolute",
    top: "35%",
    transform: "translateX(-50%)",
    left: "50%",
    WebkitTransform: "translateX(-50%)",
    color: "#f73859",
    width: "40%"
  }
});
export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.load}>
      <div className={classes.progress}>
        <LinearProgress color="secondary" />
      </div>
    </div>
  );
}
