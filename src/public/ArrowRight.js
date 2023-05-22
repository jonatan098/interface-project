import React from "react";

const ArrowRight = ({ color, size = 24, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      width={size}
      height={size}
      onClick={onClick}
      fill={color}
    >
      <path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z" />
    </svg>
  );
};

export default ArrowRight;
