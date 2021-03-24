import React, { forwardRef, useImperativeHandle } from "react";
import MUIPopover from "@material-ui/core/Popover";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const RPopover = forwardRef(
  (
    {
      children,
      anchorElement,
      paperStyle,
      maxWidth = "md",
      headerStyle,
      contentContainerStyle,
      enableCloseIcon = false,
      title,
      cardActions,
      ...props
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      close() {
        setAnchorEl(null);
      },
    }));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const anchorElementWithHandleOpen = () => {
      return React.cloneElement(anchorElement, {
        onClick: (e) => {
          anchorElement.props.onPress && anchorElement.props.onPress();
          handleOpen(e);
        },
        style: {
          cursor: "pointer",
          display: "inline-block",
          ...anchorElement.props.style,
        },
      });
    };

    return (
      <React.Fragment>
        {anchorElementWithHandleOpen()}

        <MUIPopover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            style: { padding: 0, ...paperStyle },
          }}
          {...props}
        >
          <Card style={{ ...contentContainerStyle }}>
            {(enableCloseIcon || title) && (
              <CardHeader
                style={{ ...headerStyle }}
                title={title}
                action={
                  enableCloseIcon && (
                    <CloseIcon
                      style={{
                        display: "block",
                        float: "right",
                        marginLeft: 10,
                        cursor: "pointer",
                      }}
                      onClick={handleClose}
                    />
                  )
                }
              />
            )}
            <CardContent>
              {typeof children == "function"
                ? children({ handleClose: handleClose })
                : children}
            </CardContent>
            
            {typeof cardActions == "function"
              ? cardActions({ handleClose: handleClose })
              : cardActions}
          </Card>
        </MUIPopover>
      </React.Fragment>
    );
  }
);

export default RPopover;
