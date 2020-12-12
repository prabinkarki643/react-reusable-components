import React, { forwardRef } from "react";
import MUIDialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Zoom from "@material-ui/core/Zoom";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom  ref={ref} {...props}/>
});

 const RDialog = ({
  controlled = false,
  title,
  anchorElement,
  contentStyle,
  disableBackdropClick=false,
  footerStyle,
  headerStyle,
  anchorElementContainerStyle,
  altAnchorElementWithCustomClick,
  children,
  enableCloseIcon = true,
  closeOnButtonClicked = false,
  open,
  onClose,
  buttons,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(open || false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (controlled) {
    return (
      <React.Fragment>
        <MUIDialog
          open={open}
          maxWidth="md"
          fullWidth
          TransitionComponent={Transition}
          keepMounted
          disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableBackdropClick}
          onClose={onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          {...props}
        >
          {(enableCloseIcon || title) && (
            <DialogTitle
              id="alert-dialog-slide-title"
              style={{ ...headerStyle }}
            >
              {enableCloseIcon && (
                <CloseIcon
                  style={{
                    display: "block",
                    float: "right",
                    marginLeft: 10,
                    cursor: "pointer",
                  }}
                  onClick={onClose}
                />
              )}
              {title}
            </DialogTitle>
          )}
          <DialogContent style={{ ...contentStyle }}>{children}</DialogContent>
          {buttons && buttons.length > 0 && (
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
                        handleClose();
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
        </MUIDialog>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div
          onClick={handleClickOpen}
          style={{ cursor: "pointer", ...anchorElementContainerStyle }}
        >
          {anchorElement}
        </div>
        {altAnchorElementWithCustomClick && altAnchorElementWithCustomClick}
      </div>
      <MUIDialog
        open={isOpen}
        maxWidth="md"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        {...props}
      >
        {(enableCloseIcon || title) && (
          <DialogTitle id="alert-dialog-slide-title" style={{ ...headerStyle }}>
            {enableCloseIcon && (
              <CloseIcon
                style={{
                  display: "block",
                  float: "right",
                  marginLeft: 10,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              />
            )}
            {title}
          </DialogTitle>
        )}
        <DialogContent style={{ ...contentStyle }}>
          {typeof children == "function"
            ? children({ close: handleClose })
            : children}
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
                      handleClose();
                    }else if(btn.closeOnClick){
                      handleClose();
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
      </MUIDialog>
    </React.Fragment>
  );
}

export default RDialog
