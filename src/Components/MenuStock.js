import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleListMenu({ changeIndex }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const options = ["NIFTY", "BANKNIFTY"];
  const inputLabel = React.useRef(null);

  const handleChange = event => {
    setSelectedIndex(event.target.value);
    changeIndex(event.target.value);
  };
  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Select Index
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={selectedIndex}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
