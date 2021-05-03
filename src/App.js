import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import { Grid } from "@material-ui/core";
import useStyles from './styles'

function App() {

  const classes=useStyles();
  return (
    <div>
      <Grid className={classes.grid}
        container
        spacing={0}
        alignItems='center'
        justify="center"
        style={{ height: "100hv" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title='income'/>
        </Grid>
        <Grid item xs={12} sm={3}>
         <Main/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title='expense'/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
