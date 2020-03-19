import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "./config";

function TabMenu() {
  const [value, setValue] = React.useState(1);

  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      boxShadow: "1px 1px 1px #9E9E9E"
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {data.map((item, index) => (
          <Tab key={index} style={{ minWidth: 80 }} icon={item} />
        ))}
      </Tabs>
    </div>
  );
}

export default TabMenu;
