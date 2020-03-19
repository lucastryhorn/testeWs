import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  client: {
    flexDirection: "row",
    display: "flex"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
