import React from "react";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import { navigationTheme } from "../styles/material/makeStyles";

import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ListItem,
  ListItemIcon,
  ListItemText,
  ViewListIcon,
  EditIcon,
  makeStyles,
  useTheme
} from "../modules/material";

import routemapping from "../data/routemapping.json";

const useStyles = makeStyles(navigationTheme);

function PersistentDrawerLeft(props) {
  console.log(props.history);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRoute = name => {
    console.log("handle", name, routemapping, routemapping[name]);
    props.history.push(`/${routemapping[name]}`);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            dashboard delhaize dok noord
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["bestellingen broodjes", "bestellingen schotels"].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                onClick={handleRoute.bind(this, text)}
              >
                <ListItemIcon>
                  {index === 0 ? <ViewListIcon /> : null}
                  {index === 1 ? <ViewListIcon /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {[
            "aanpassen broodjes",
            "aanpassen schotels",
            "aanpassen afbeeldingen",
            "aanpassen teksten"
          ].map((text, index) => (
            <ListItem button key={text} onClick={handleRoute.bind(this, text)}>
              <ListItemIcon>
                {index === 0 ? <EditIcon /> : null}
                {index === 1 ? <EditIcon /> : null}
                {index === 2 ? <EditIcon /> : null}
                {index === 3 ? <EditIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
  );
}

const PersistentDrawerLeftWithRouter = withRouter(PersistentDrawerLeft);

export default PersistentDrawerLeftWithRouter;
