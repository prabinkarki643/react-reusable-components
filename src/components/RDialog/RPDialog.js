import React, { forwardRef, Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Zoom from "@material-ui/core/Zoom";
import { Button, DialogContentText } from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default class RPDialog extends Component {
  static openConfirmDialog({ ...config }) {
    const finalConfig = {
      title: "",
      message: "",
      customUI: null,
      contentStyle:{},
      footerStyle:{},
      headerStyle:{},
      showActionsButton:true,
      enableCloseIcon: false,
      onClickYes: null,
      onClickNo: null,
      yesText: "Yes",
      noText: "No",
      disableBackdropClick: false,
      closeOnButtonClicked: true,
      yesButtonProps: null,
      noButtonProps: null,
      dialogProps: null,
      buttons: [
        {
          label: config.yesText || "Yes",
          onClick: config.onClickYes,
          style: { backgroundColor: "#0f0e0b" },
          props: config.yesButtonProps,
          closeOnClick: null,
        },
        {
          label: config.noText || "No",
          onClick: config.onClickNo,
          style: { backgroundColor: "#0f0e0b" },
          props: config.noButtonProps,
          closeOnClick: null,
        },
      ],
      ...config,
    };
    this.dialogInstance.showDialog(finalConfig);
  }
  static dialogInstance;

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      config: {},
    };
  }

  showDialog = (config) => {
    this.setState({ open: true, config: config });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const {
      title,
      message,
      customUI,
      contentStyle,
      footerStyle,
      headerStyle,
      enableCloseIcon = false,
      showActionsButton=true,
      onClickYes,
      onClickNo,
      yesText,
      noText,
      disableBackdropClick,
      closeOnButtonClicked = true,
      yesButtonProps,
      noButtonProps,
      dialogProps,
      buttons = [
        {
          label: yesText || "Yes",
          onClick: onClickYes,
          style: { backgroundColor: "#0f0e0b" },
          props: yesButtonProps,
          closeOnClick: null,
        },
        {
          label: noText || "No",
          onClick: onClickNo,
          style: { backgroundColor: "#0f0e0b" },
          props: noButtonProps,
          closeOnClick: null,
        },
      ],
    } = this.state.config;
    if (!open) return null;
    return (
      <React.Fragment>
        <Dialog
          onClose={this.handleClose}
          open={open}
          maxWidth="md"
          fullWidth
          TransitionComponent={Transition}
          keepMounted
          disableBackdropClick={disableBackdropClick}
          disableEscapeKeyDown={disableBackdropClick}
          {...dialogProps}
        >
          {(enableCloseIcon||title) && (
            <DialogTitle style={{...headerStyle}}>
              {enableCloseIcon && (
                <CloseIcon
                  style={{
                    display: "block",
                    float: "right",
                    marginLeft: 10,
                    cursor: "pointer",
                  }}
                  onClick={this.handleClose}
                />
              )}
              {title}
            </DialogTitle>
          )}
          <DialogContent style={{...contentStyle}}>
            {customUI && typeof customUI == "function" ? (
              customUI({ close: this.handleClose })
            ) : (
              <DialogContentText>{message}</DialogContentText>
            )}
          </DialogContent>
          {showActionsButton && buttons.length > 0 && (
            <DialogActions style={{...footerStyle}}>
              {buttons.map((btn, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      btn.onClick &&
                      typeof btn.onClick == "function" &&
                      btn.onClick();
                    if (closeOnButtonClicked) {
                      this.handleClose();
                    }else if(btn.closeOnClick){
                      this.handleClose();
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
        </Dialog>
      </React.Fragment>
    );
  }
}
