import React from "react";
import Grid from "@material-ui/core/Grid";

export default function RCol({children,style, ...props }) {

  return (
    <Grid
      item
      style={style}
      {...props}
    >
        {children}
    </Grid>
  );
}
