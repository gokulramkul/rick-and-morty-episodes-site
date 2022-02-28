import React from "react";

function GenderIcon({ className, style, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      className={className}
      style={{ marginRight: "10px", ...style }}
    >
      <title>{title}</title>
      <path
        fill="#8C8C8C"
        fillRule="evenodd"
        d="M13.25 2a.75.75 0 110-1.5h7.5a.75.75 0 01.75.75v7.5a.75.75 0 11-1.5 0V3.06l-6.194 6.194a7.5 7.5 0 11-1.06-1.06L18.939 2H13.25zM8 8a6 6 0 100 12A6 6 0 008 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default GenderIcon;
