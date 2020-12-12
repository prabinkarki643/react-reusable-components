import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:0,
    width:'100%'
  }
}));

export default function RRow({ children,spacing=1 ,...props }) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      spacing={spacing}
      direction="row"
      {...props}
    >
        {children}
    </Grid>
  );
}
