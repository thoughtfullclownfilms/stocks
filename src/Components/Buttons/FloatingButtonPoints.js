import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {
    '& > *': {
      margin: theme.spacing (1),
    },
    position: 'fixed',
    right: '5%',
    top: '15%',
    bottom: 'auto',
    left: 'auto',
    borderStyle: 'groove',
    border: 'gold',
    background: 'black',
    color: 'white',
  },
  extendedIcon: {
    marginRight: theme.spacing (1),
  },
}));

export default function FloatingActionButtons({startPrice, lastPrice, index}) {
  const classes = useStyles ();

  return (
    <div className={classes.root}>
      <div />
    </div>
  );
}
