import React from "react";
import MUIMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function RMenu({
  anchorElement,
  anchorElementStyle,
  paperProps,
  closeOnClickItem = true,
  children,
  ...props
}) {
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
      <MUIMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...props}
      >
        {children({ handleClose: handleClose })}
      </MUIMenu>
    </React.Fragment>
  );
}

RMenu.Item = MenuItem;
