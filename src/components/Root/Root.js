import React from "react";
import RPDialog from "../RDialog/RPDialog";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Root({ children }) {
  return (
    <div>
      <CssBaseline />
      {children}
      <RPDialog
        ref={(c) => {
          if (c) RPDialog.dialogInstance = c;
        }}
      />
    </div>
  );
}
