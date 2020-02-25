import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createIngredientsString } from "../utils/functions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    padding: "2%",
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Sandwich_List({ sandwich }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main sandwich_overview">
        <ListItem>
          <ListItemText primary={sandwich.name} />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <ListItemText primary={sandwich.price} />
        </ListItem>
        <ListItem>
          <ListItemText primary={sandwich.isWhite ? "wit" : "bruin"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={createIngredientsString(sandwich.ingredients)}
          />
        </ListItem>
      </List>
    </div>
  );
}
