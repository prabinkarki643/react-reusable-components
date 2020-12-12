import React, { forwardRef, useImperativeHandle } from "react";
import MUIPopover from "@material-ui/core/Popover";
import { Container } from "@material-ui/core";

const RPopover = forwardRef(
  (
    {
      children,
      anchorElement,
      anchorElementContainerStyle,
      paperStyle,
      maxWidth = "md",
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
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <React.Fragment>
        <div
          style={{
            cursor: "pointer",
            display: "inline-block",
            ...anchorElementContainerStyle,
          }}
          onClick={handleClick}
        >
          {anchorElement}
        </div>

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
            style: { padding: 5, ...paperStyle },
          }}
          {...props}
        >
          <Container maxWidth={maxWidth} style={{ padding: 0 }}>
            {typeof children == "function"
              ? children({ close: handleClose })
              : children}
          </Container>
        </MUIPopover>
      </React.Fragment>
    );
  }
);

export default RPopover;
