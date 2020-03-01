import React from "react";
import {
  makeStyles,
  Alert,
  Dialog,
  DialogContent,
  DialogActions,
  Button
} from "../modules/material";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function Alerter({ type, text }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Alert variant="outlined" severity={type}>
            {text}
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
