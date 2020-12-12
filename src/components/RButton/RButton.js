import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import React from "react";

const StyledButton = styled(Button)({
  borderRadius: ({ roundness, rounded }) => (rounded ? roundness : "default"),
  textTransform: ({ textTransform }) => textTransform,
});
StyledButton.defaultProps = {
  variant: "contained",
  color: "primary",
  roundness: 15,
  rounded: false,
  textTransform: "uppercase",
};

const RButton = ({
  children,
  loading = false,
  loadingText = "Loading...",
  onClick,
  startIcon,
  type,
  style,
  ...props
}) => {
  return (
    <StyledButton
      style={{ cursor: loading ? "default" : "pointer", ...style }}
      startIcon={
        loading ? <CircularProgress size={15} color="inherit" /> : startIcon
      }
      type={loading ? "button" : type}
      onClick={loading ? () => {} : onClick}
      {...props}
    >
      {loading ? loadingText : children}
    </StyledButton>
  );
};

const CustomButton = ({
  children,
  textColor,
  backgroundColor,
  style,
  ...props
}) => {
  return (
    <RButton
      style={{ color: textColor, backgroundColor: backgroundColor, ...style }}
      {...props}
    >
      {children}
    </RButton>
  );
};

RButton.CustomButton = CustomButton;

export default RButton;
