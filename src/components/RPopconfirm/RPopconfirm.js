import React from "react";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import RPopover from "../RPopover";

export default function RPopconfirm({
  anchorElement,
  anchorElementContainerStyle,
  message = "Message to user here",
  onClickYes = () => {},
  onClickNo = () => {},
  title,
  maxWidth = "md",
  contentStyle,
  footerStyle,
  severity = "error",
  closeOnButtonClicked = true,
  yesButtonProps,
  noButtonProps,
  alertProps,
  yesText,
  noText,
  paperStyle,
  buttons = [
    {
      label: yesText || "Yes",
      onClick: onClickYes,
      style: { backgroundColor: "#b32d00" },
      props: yesButtonProps,
    },
    {
      label: noText || "No",
      onClick: onClickNo,
      style: { backgroundColor: "#0f0e0b" },
      props: { ...noButtonProps },
    },
  ],
  ...props
}) {

  return (
    <RPopover
      anchorElement={anchorElement}
      anchorElementContainerStyle={anchorElementContainerStyle}
      paperStyle={paperStyle}
      maxWidth={maxWidth}
      {...props}
    >
      {({ close }) => (
        <>
          <DialogContent style={{ padding: 0, ...contentStyle }}>
            <Alert severity={severity}>
              <AlertTitle>{title}</AlertTitle>
              {message}
            </Alert>
          </DialogContent>
          {buttons.length > 0 && (
            <DialogActions style={{ ...footerStyle }}>
              {buttons.map((btn, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      btn.onClick &&
                        typeof btn.onClick == "function" &&
                        btn.onClick();
                      if (closeOnButtonClicked) {
                        close();
                      }
                    }}
                    variant="contained"
                    color="primary"
                    style={{ ...btn.style }}
                    {...btn.props}
                  >
                    {btn.label}
                  </Button>
                );
              })}
            </DialogActions>
          )}
        </>
      )}
    </RPopover>
  );
}
