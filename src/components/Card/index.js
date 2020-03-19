import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMaterial from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 300,
    maxWidth: 500,
    boxShadow: "1px 1px 1px #9E9E9E"
  },
  title: {
    fontSize: 14
  }
});

export default function Card(props) {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <CardMaterial className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          style={{ fontSize: 16 }}
        >
          {title}
        </Typography>
        {children}
      </CardContent>
    </CardMaterial>
  );
}
