import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./AddUserForm.css";
import { Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function AddUserForm() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <TextField
            required
            id="outlined-required-1"
            label="Email"
            variant="outlined"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required-2"
            label="Username"
            variant="outlined"
            defaultValue=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <TextField
            required
            id="outlined-required-3"
            label="Phone Number"
            variant="outlined"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            variant="outlined"
            label="City"
            defaultValue=""
          />
        </div>

        <Button style={{ background: "black", color: "white" }}>
          Add User
        </Button>
      </form>
    </div>
  );
}
