import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  GridList,
  GridListTile
} from "@material-ui/core";
import {
  ImageMultiple,
  ViewHeadline,
  ShareVariant,
  HomeCircle,
  AccountCircle
} from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from "../assets/images/logo.png";

const useStyles = makeStyles(theme => ({
  right: {
    width: "100%"
  },
  img: {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    height: "100%"
  },
  imgContainer: {
    height: 75,
    width: 85
  },
  appBar: {
    backgroundColor: "#232931"
  },
  iconBtn: {
    fontSize: "2rem",
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    WebkitTransform: "translate(-50%,-50%)"
  },
  icon: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
      margin: "0 1.5rem"
    },
    color: "#ededed",
    "&:hover": {
      background: "#f73859"
    }
  },
  more: {
    display: "inherit",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  mobIcon: {
    color: "#ededed",
    "&:hover": {
      background: "#f73859"
    }
  },
  root: {
    background: "#fff"
  },
  tile0: {
    background: "#ED765F"
  },
  tile1: {
    background: "#F4AB53"
  },
  tile2: {
    background: "#F09256"
  },
  tile3: {
    background: "#F9C950"
  }
}));

export default function Header() {
  const classes = useStyles();
  const lg = useMediaQuery("(min-width:1026px)");
  const [right, setRight] = useState(false); //mobile drawer
  const handleClose = () => setRight(false);
  const handleClick = () => setRight(true);
  const [height, setHeight] = useState(0); //clear fixed position
  const ref = useRef();
  useEffect(() => {
    function handleMeasure() {
      setHeight(ref.current.clientHeight);
    }
    handleMeasure();
  }, []);
  const icons = [HomeCircle, AccountCircle, ImageMultiple, ShareVariant];
  const iconLists = icons.map((Icon, index) => (
    <IconButton key={index} className={classes.icon}>
      <Icon />
    </IconButton>
  ));
  return (
    <>
      <AppBar
        ref={ref}
        color="default"
        position="fixed"
        classes={{ colorDefault: classes.appBar }}
      >
        <Toolbar>
          <div className={classes.imgContainer}>
            <Link to="/">
              <div className={classes.img} />
            </Link>
          </div>
          <div style={{ flexGrow: 1 }} />
          {iconLists}
          <IconButton
            className={classes.more + " " + classes.icon}
            onClick={handleClick}
          >
            <ViewHeadline />
          </IconButton>
          <Drawer
            transitionDuration={{ enter: 1000, exit: 600 }}
            anchor="right"
            open={right}
            classes={{ paperAnchorRight: classes.right }}
          >
            <div className={classes.root}>
              <GridList cellHeight={320} className={classes.gridList}>
                {icons.map((Icon, index) => {
                  let tile = "tile" + index;
                  return (
                    <GridListTile
                      key={index}
                      classes={{ tile: classes[tile], root: classes.root }}
                    >
                      <IconButton
                        onClick={handleClose}
                        className={classes.iconBtn}
                      >
                        <Icon fontSize="inherit" />
                      </IconButton>
                    </GridListTile>
                  );
                })}
              </GridList>
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
      <div style={{ height: lg ? 0 : `${height}px` }} />
    </>
  );
}
