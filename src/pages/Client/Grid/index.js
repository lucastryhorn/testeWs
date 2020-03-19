import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "../../../components/Card";
import { data } from "./config";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "55%"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export default function Grid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={2} cellHeight={310} className={classes.gridList}>
        {data.map(item => (
          <GridListTile key={item.title}>
            <Card title={item.title}>{item.children}</Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
