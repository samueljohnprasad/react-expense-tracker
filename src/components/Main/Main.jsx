import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import From from "./Form/From";
import List from './List/List'


const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="hello samuel" />
      <CardContent>
        <Typography aligh="center" variant="h5">
          Total balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          trying saying income value
        </Typography>
        <Divider />
       <From/>
      </CardContent>

      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
           <List/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
