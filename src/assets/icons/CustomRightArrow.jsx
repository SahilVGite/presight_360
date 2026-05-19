import React from "react";

const CustomRightArrow = ({ size = 50, className, color = "#9C9C9C" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" stroke={color} />
      <path
        d="M35.3122 25H15.3125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M28.2383 32.075C28.2383 28.4379 31.4415 25 35.3134 25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M28.2383 17.9248C28.2383 21.562 31.4415 24.9999 35.3134 24.9999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default CustomRightArrow;
