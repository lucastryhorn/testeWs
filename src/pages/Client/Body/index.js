import React from "react";
import GridClient from "../Grid";
import { makeStyles } from "@material-ui/core";
import Activities from "./Activities";

const useStyles = makeStyles({
  root: {
    flexDirection: "row",
    display: "flex",
    padding: "10px",
    justifyContent: "space-between"
  }
});

function Body() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridClient />
      <Activities />
    </div>
  );
}

export default Body;
