import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { Container } from "@material-ui/core";
import "./Tabs.css";
import Charts from "./Charts/Charts";
function TabPanel(props) {
  const { children, index, date, indexType, ce, pe, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Container p={3} style={{ marginTop: "10px" }}>
        <Charts date={date} index={indexType} type={children} ce={ce} pe={pe} />
      </Container>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonForce({
  date,
  index,
  cePrice,
  pePrice
}) {
  const classes = useStyles();

  if (date !== "" && index !== "" && cePrice !== 0 && pePrice !== 0) {

    return (
      <div className={classes.root}>
        <Container p={3} style={{ marginTop: "10px" }}>
          <Charts
            date={date}
            index={index}
            type={"Both"}
            ce={cePrice}
            pe={pePrice}
          />
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
}
