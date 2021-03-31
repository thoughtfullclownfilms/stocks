import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { apiRequest } from "../utils/helper";

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

export default function SimpleListMenu({ changeDate }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const inputLabel = React.useRef(null);

  React.useEffect(() => {
    authHandler();
  }, []);
  const authHandler = async () => {
    try {
      const userData = await apiRequest({
        url: "https://api.optionalgo.in:6001/v1/getdates",
        method: "post",
        bodyParams: {}
      });
      const { data, success } = userData;
      if (success) {
        setOptions(data);
      }
    } catch (err) {
      window.alert(err);
    }
  };

  const handleChange = event => {
    setSelectedIndex(event.target.value);
    changeDate(event.target.value);
  };
  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Select Date
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={selectedIndex}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          {options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
