import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {
    '& > *': {
      margin: theme.spacing (1),
    },
    position: 'fixed',
    left: '2%',
    top: '15%',
    bottom: 'auto',
    right: 'auto',
    borderStyle: 'groove',
    border: 'gold',
    background: 'black',
    color: 'white',
    width: '8%',
  },
  rootMobile: {
    '& > *': {
      margin: theme.spacing (1),
    },
    position: 'relative',
    left: '2%',
    top: '15%',
    bottom: 'auto',
    right: 'auto',
    borderStyle: 'groove',
    border: 'gold',
    background: 'black',
    color: 'white',
    width: '30%',
  },
  extendedIcon: {
    marginRight: theme.spacing (1),
  },
}));

export default function FloatingActionButtons({startPrice, lastPrice}) {
  const classes = useStyles ();

  return (
    <div
      className={window.innerWidth < 1200 ? classes.rootMobile : classes.root}
    >
      <div>
        <h6>
          <div style={{color: 'green'}}>Start Price:</div> {startPrice}
        </h6>
        <h6>
          <div style={{color: 'green'}}>Last Price:</div> {lastPrice}
        </h6>
      </div>
    </div>
  );
}
