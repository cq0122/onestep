import React from "react";

const MyIcon = (props) => {
  const { code, size, color, style } = props;
  return (
    <svg
      className="icon"
      aria-hidden="true"
      fontSize={size}
      color={color}
      style={style}
    >
      <use xlinkHref={`#${code}`}></use>
    </svg>
  );
};

export default MyIcon;
