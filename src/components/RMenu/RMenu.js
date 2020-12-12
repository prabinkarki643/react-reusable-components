import React from "react";
import MUIMenu from "@material-ui/core/Menu";


export default function RMenu({
  anchorElement,
  anchorElementStyle,
  paperProps,
  closeOnClickItem = true,
  children,
  ...props
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const addCloseHandler = (child) => {
    return React.cloneElement(child, {
      onClick: ()=>{
          child.props.onClick && child.props.onClick()
          handleClose()
      },
    });
  };
  return (
    <React.Fragment>
        <div onClick={handleClick} style={{display:'inline-block',...anchorElementStyle}}>
          {anchorElement}
        </div>
        <MUIMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          {...props}
        >
          {children?.length > 1
            ? children.map((child, index) => {
                return closeOnClickItem ? addCloseHandler(child) :child;
              })
            : closeOnClickItem?addCloseHandler(children):children}
        </MUIMenu>
      </React.Fragment>
  )
}