import React from "react";

const ValuesIcon = ({ size=60, className, color="#DB3B3B" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.2376 20.3445C28.7046 19.2216 30.2952 19.2216 30.7623 20.3445L32.931 25.5588L38.5603 26.01C39.7725 26.1072 40.264 27.62 39.3404 28.4112L35.0515 32.0851L36.3619 37.5783C36.644 38.7612 35.3572 39.6962 34.3193 39.0623L29.4999 36.1186L24.6805 39.0623C23.6426 39.6962 22.3558 38.7612 22.6379 37.5783L23.9483 32.0851L19.6594 28.4112C18.7358 27.62 19.2273 26.1072 20.4396 26.01L26.0688 25.5588L28.2376 20.3445Z"
        fill={color}
      />
    </svg>
  );
};

export default ValuesIcon;
