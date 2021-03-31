import React from 'react';
import {HashRouter, NavLink} from 'react-router-dom';
import './Toolbar.css';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing (2),
  },
}));
const MyToolbar = ({hideButton}) => {
  const classes = useStyles ();
  return (
    <HashRouter basename="/">
      <AppBar position="sticky" style={{background: 'black', color: 'white'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              exact
              to="/"
              activeStyle={{fontWeight: '900'}}
              style={{color: 'white'}}
            >
              My LOGO
            </NavLink>
          </Typography>
          <div style={{flex: '1'}} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              color: 'white',
            }}
          >
            <Typography style={{paddingRight: '10px'}}>
              <NavLink
                exact
                to="/"
                activeStyle={{fontWeight: '900', color: 'hotpink'}}
                style={{fontWeight: '400', color: 'white'}}
              >
                Change
              </NavLink>
            </Typography>
            <Typography style={{paddingRight: '10px'}}>
              <NavLink
                to="/OI"
                exact
                activeStyle={{fontWeight: '900', color: 'hotpink'}}
                style={{fontWeight: '400', color: 'white'}}
              >
                OI
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/Home"
                exact
                activeStyle={{fontWeight: '900', color: 'hotpink'}}
                style={{fontWeight: '400', color: 'white'}}
              >
                Home
              </NavLink>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </HashRouter>
  );
};

export default MyToolbar;
