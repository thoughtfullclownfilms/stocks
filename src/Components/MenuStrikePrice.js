import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import { apiRequest } from "../utils/helper";
import { Select, FormControl, InputLabel } from "@material-ui/core";

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

export default function MenuStrikePrice({
  strikeprice,
  strikeprice2,
  date,
  index,
  type
}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState('');
  const [options, setOptions] = React.useState([0]);
  const [options2, setOptions2] = React.useState([0]);

  React.useEffect(() => {
    const authHandler = async () => {
      try {
        const userData = await apiRequest({
          url: "https://api.optionalgo.in:6001/v1/getstrikeprices",
          method: "post",
          bodyParams: {
            date: date,
            pointtype: type,
            stockname: index
          }
        });
        const { data, success } = userData;
        if (success) {
          setOptions(data);
        }
      } catch (err) {
        window.alert(err);
      }
    };
    authHandler();
  }, [date, index, type]);
  React.useEffect(() => {
    let data = options.sort();
    if (type === "PE") {
      data = data.reverse();
    }
    setOptions2(data);
  }, [options, type]);

  const handleChange = event => {
    setSelectedIndex(event.target.value);
    if (strikeprice) strikeprice(event.target.value);
    if (strikeprice2) strikeprice2(event.target.value);
  };

  const inputLabel = React.useRef(null);
  if (date !== "" && index !== "" && options.length !== 0) {
    return (
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            {type} Price
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={selectedIndex}
            onChange={handleChange}
            className={classes.selectEmpty}
          >
            {options2.map((option, index) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  } else {
    return <div></div>;
  }
}
