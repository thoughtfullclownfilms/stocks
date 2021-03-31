import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import {apiRequest} from '../utils/helper';
import {Select, FormControl, InputLabel, Input, Chip} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  formControl: {
    margin: theme.spacing (1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing (3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles (name, selectedIndex, theme) {
  return {
    fontWeight: selectedIndex.indexOf (name) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium,
  };
}

export default function MenuStrikePriceMulti({
  strikeprice,
  strikeprice2,
  date,
  index,
  type,
  inp,
}) {
  const classes = useStyles ();
  const [selectedIndex, setSelectedIndex] = React.useState ([]);
  const [options, setOptions] = React.useState ([]);
  const [options2, setOptions2] = React.useState ([]);
  const theme = useTheme ();

  React.useEffect (
    () => {
      const authHandler = async () => {
        try {
          const userData = await apiRequest ({
            url: 'http://192.168.1.8:6001/v1/getstrikeprices',
            method: 'post',
            bodyParams: {
              date: date,
              pointtype: type,
              stockname: index,
            },
          });
          const {data, success} = userData;
          if (success) {
            setOptions (data);
          }
        } catch (err) {
          window.alert (err);
        }
      };
      authHandler ();
    },
    [date, index, type]
  );
  React.useEffect (
    () => {
      let data = options.sort ();
      if (type === 'PE') {
        data = data.reverse ();
      }
      setOptions2 (data);
    },
    [options, type]
  );

  const handleChange = event => {
    if (event.target.value.length <= inp) {
      setSelectedIndex (event.target.value);
      if (strikeprice) strikeprice (event.target.value);
      if (strikeprice2) strikeprice2 (event.target.value);
    } else {
      window.alert ("Don't Select more than " + inp);
    }
  };

  const inputLabel = React.useRef (null);
  if (date !== '' && index !== '' && options.length !== 0) {
    return (
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            {type} Price
          </InputLabel>
          <Select
            multiple
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={selectedIndex}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map (value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {options2.map (option => (
              <MenuItem
                value={option}
                key={option}
                style={getStyles (option, selectedIndex, theme)}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  } else {
    return <div />;
  }
}
