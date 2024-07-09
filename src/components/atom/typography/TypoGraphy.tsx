import TypographyPropsType from "./type";
import React from "react";
const TypoGraphy = ({
  tag="p",
  text="ith nadakila",
  classes,
  children,
  style,
  role,
  ariaLabelledBy,
  ariaLable,
}: TypographyPropsType) => {
  return React.createElement(
    tag,
    { className: classes, style: style,"aria-label":ariaLable,"aria-labelledby":ariaLabelledBy },
    <>
      {text},{children}
    </>
  );
};

export default TypoGraphy;
