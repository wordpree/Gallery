import React from "react";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";

const useStyes = makeStyles({
  fab: {
    position: "fixed",
    right: "6%",
    bottom: "6%",
    opacity: 0.8,
    "&:hover": { opacity: 1 },
    transition: "all 0.5s"
  }
});
export default function PrevPageFab({ to }) {
  const classes = useStyes();
  const FabLink = React.forwardRef((props, ref) => (
    <Link to={to} ref={ref} {...props} />
  ));
  return (
    <Fab component={FabLink} className={classes.fab} color="primary">
      <ArrowLeftCircle />
    </Fab>
  );
}
