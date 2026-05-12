import React from "react";

const Upload = ({ size=20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_54659_15165)">
        <path
          d="M7.49996 13.3333H12.5V8.33333H15.8333L9.99996 2.5L4.16663 8.33333H7.49996V13.3333ZM4.16663 15H15.8333V16.6667H4.16663V15Z"
          fill={"currentColor"}
        />
      </g>
      <defs>
        <clipPath id="clip0_54659_15165">
          <rect width={size} height={size} fill={"currentColor"} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Upload;
