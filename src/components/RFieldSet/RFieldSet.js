import React from "react";
import { styled } from "@material-ui/core/styles";

const StyledFiledSet = styled("fieldset")({
  border: "2px groove black",
  padding: "0 1.4em 1.4em 1.4em",
  margin: "0 0 1.5em 0",
});

const StyledLegend = styled("legend")({
  width: "auto"
//   padding:2
});

function RFieldSet({
  children,
  legendText,
  borderColor,
  legendProps,
  legendPosition = "left",
  ...props
}) {
  return (
    <StyledFiledSet {...props}>
      <StyledLegend style={{textAlign:legendPosition || "left",...legendProps?.style}}  {...legendProps}>
        {legendText}
      </StyledLegend>
      <>{children}</>
    </StyledFiledSet>
  );
}

export default RFieldSet;
