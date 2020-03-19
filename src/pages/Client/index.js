import React from "react";
import TopMenu from "../../components/TopMenu";
import TabMenu from "../../components/TabMenu";
import Body from "./Body";
import { useStyles } from "./styles";

function Client() {
  const classes = useStyles();
  return (
    <div className="Client">
      <TopMenu />
      <div className={classes.client}>
        <TabMenu />
        <Body />
      </div>
    </div>
  );
}

export default Client;
