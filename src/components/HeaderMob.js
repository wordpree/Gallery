import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: "linear-gradient(to right, #434343 0%, #232931 100%)",
    padding: "1rem"
  },
  list: {
    padding: "1rem"
  },
  item: {
    "&:hover": {
      background: "#000"
    }
  },
  iconBtn: {
    fontSize: "2rem",
    color: "#ededed"
  },
  paper: {
    backgroundColor: "transparent"
  },
  divider: {
    background: "linear-gradient(to right, #ededed 0%, #fff 100%)",
    margin: "0.5rem auto"
  },
  typo: {
    color: "#ededed"
  }
}));

export default function HeaderMob({ top, handleClose, mobIcon }) {
  const classes = useStyles();
  const ListItemLink = React.forwardRef((props, ref) => (
    <Link ref={ref} {...props} />
  ));
  return (
    <Drawer
      transitionDuration={{
        enter: 1000,
        exit: 600
      }}
      anchor="top"
      open={top}
      onClose={handleClose}
      classes={{
        paperAnchorRight: classes.right,
        paper: classes.paper
      }}
    >
      <div className={classes.root}>
        <List
          component="nav"
          aria-label="toggle-menus"
          className={classes.list}
        >
          {mobIcon.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={index}>
                <ListItem
                  button
                  component={ListItemLink}
                  to={item.link}
                  className={classes.item}
                >
                  <ListItemIcon className={classes.iconBtn}>
                    <Icon fontSize="default" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography className={classes.typo}>
                        {item.title}
                      </Typography>
                    }
                  />
                </ListItem>
                {index !== 2 && <Divider className={classes.divider} />}
              </React.Fragment>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
