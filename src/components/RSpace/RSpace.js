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

export default function RSpace({ children,spacing=1,direction="row" ,...props }) {
  const classes = useStyles();

  return (
    <Grid
    
      container
      className={classes.root}
      spacing={spacing}
      direction={direction}
      alignItems="center"
      {...props}
    >
      {children?.length > 1 ? (
        children.map((child, index) => {
          return <Grid item key={index}>{child}</Grid>;
        })
      ) : (
        <Grid item>{children}</Grid>
      )}
    </Grid>
  );
}
