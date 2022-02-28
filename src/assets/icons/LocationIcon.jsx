import React from "react";

function LocationIcon({ className, style, title }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      fill="none"
      viewBox="0 0 16 20"
      className={className}
      style={{ marginRight: "16px", ...style }}
    >
      <title>{title}</title>
      <path
        fill="#8C8C8C"
        d="M8 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C14 4.57 11.35 2 8 2S2 4.57 2 8.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM8 0c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C0 3.22 3.8 0 8 0z"
      ></path>
    </svg>
  );
}

export default LocationIcon;
