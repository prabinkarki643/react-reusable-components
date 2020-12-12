import React from "react";
import { DialogContentText } from "@material-ui/core";
import RDialog from "./RDialog";

const RConfirmDialog = ({
  anchorElement,
  anchorElementContainerStyle,
  altAnchorElementWithCustomClick,
  contentStyle,
  footerStyle,
  headerStyle,
  title,
  message,
  enableCloseIcon = false,
  onClickYes,
  onClickNo,
  yesText,
  noText,
  disableBackdropClick,
  closeOnButtonClicked = true,
  yesButtonProps,
  noButtonProps,
  open,
  buttons = [
    {
      label: yesText || "Yes",
      onClick: onClickYes,
      style: { backgroundColor: "#0f0e0b" },
      props: yesButtonProps,
      closeOnClick: true,
    },
    {
      label: noText || "No",
      onClick: onClickNo,
      style: { backgroundColor: "#0f0e0b" },
      props: noButtonProps,
      closeOnClick: true,
    },
  ],
  ...props
}) => {
  return (
    <RDialog
      anchorElement={anchorElement}
      anchorElementContainerStyle={anchorElementContainerStyle}
      altAnchorElementWithCustomClick={altAnchorElementWithCustomClick}
      enableCloseIcon={enableCloseIcon}
      title={title}
      buttons={buttons}
      headerStyle={headerStyle}
      contentStyle={contentStyle}
      footerStyle={footerStyle}
      closeOnButtonClicked={closeOnButtonClicked}
      disableBackdropClick={disableBackdropClick}
      open={open}
      {...props}
    >
      {({ close }) => <DialogContentText>{message}</DialogContentText>}
    </RDialog>
  );
};
RConfirmDialog.defaultProps = {
  anchorElement: <div>anchorElement</div>,
  anchorElementContainerStyle: null,
  title: "Dialog Title",
  message:
    " To subscribe to this website, please enter your email address here. We will send updates occasionally.",
  onClickYes: () => {},
  onClickNo: () => {},
  disableBackdropClick: false,
  closeOnButtonClicked: true,
  yesText: "Yes",
  noText: "No",
  yesButtonProps: null,
  noButtonProps: null,
  open: false,
};

export default RConfirmDialog;
