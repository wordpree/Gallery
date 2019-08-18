import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import {
  ImageMultiple,
  ViewHeadline,
  ShareVariant,
  HomeCircle,
  AccountCircle
} from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo.png";
import HeaderMob from "./HeaderMob";

const useStyles = makeStyles(theme => ({
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
  gridList: {
    background: "#232931"
  }
}));

export default function Header() {
  const classes = useStyles();
  const [top, setRight] = useState(false); //mobile drawer
  const [height, setHeight] = useState(0); //clear fixed position
  const ref = useRef();
  useEffect(() => {
    function handleMeasure() {
      setHeight(ref.current.clientHeight);
    }
    handleMeasure();
  }, []);
  const icons = [AccountCircle, ImageMultiple];
  const links = ["/about", "/image"];
  const mobileTiles = [
    {
      icon: HomeCircle,
      link: "/",
      title: "Home Page"
    },
    {
      icon: AccountCircle,
      link: "/about",
      title: "About Us"
    },
    {
      icon: ImageMultiple,
      link: "/image",
      title: "More Images"
    }
  ];

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
          {icons.map((Icon, index) => (
            <Link to={links[index]} key={index}>
              <IconButton className={classes.icon} color="secondary">
                <Icon />
              </IconButton>
            </Link>
          ))}
          <IconButton className={classes.icon} color="secondary">
            <ShareVariant />
          </IconButton>
          <IconButton
            className={classes.more + " " + classes.icon}
            onClick={() => setRight(true)}
          >
            <ViewHeadline />
          </IconButton>
          <HeaderMob
            top={top}
            handleClose={() => setRight(false)}
            mobIcon={mobileTiles}
          />
        </Toolbar>
      </AppBar>
      <div style={{ height: `${height}px` }} />
    </>
  );
}
