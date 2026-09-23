import React from "react";

interface JojoIconProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Diamond + ladybug on lavender — Golden Wind fashion still mark. */
export const JojoIcon: React.FC<JojoIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="1em"
      height="1em"
      fill="none"
      role="img"
      focusable={false}
      {...props}
    >
      <title>JoJo Theme Icon — Vento Aureo</title>
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="2"
        fill="#C5BDD4"
        stroke="#0A0A0C"
        strokeWidth="3"
      />
      <path d="M8 20 L16 8 L24 20 L16 32 Z" fill="none" stroke="#1E6BDB" strokeWidth="2" />
      <path d="M20 20 L28 8 L36 20 L28 32 Z" fill="none" stroke="#1E6BDB" strokeWidth="2" />
      <path d="M32 20 L40 8 L48 20 L40 32 Z" fill="none" stroke="#1E6BDB" strokeWidth="2" />
      <ellipse cx="32" cy="40" rx="14" ry="12" fill="#E8318A" stroke="#0A0A0C" strokeWidth="2.5" />
      <ellipse cx="32" cy="32" rx="7" ry="6" fill="#0A0A0C" />
      <line x1="32" y1="32" x2="32" y2="52" stroke="#0A0A0C" strokeWidth="2" />
      <circle cx="26" cy="38" r="2.4" fill="#0A0A0C" />
      <circle cx="38" cy="38" r="2.4" fill="#0A0A0C" />
      <circle cx="32" cy="46" r="2" fill="#0A0A0C" />
      <path
        d="M50 10 L52.2 15.2 L58 16 L53.5 19.5 L54.8 25 L50 22.2 L45.2 25 L46.5 19.5 L42 16 L47.8 15.2 Z"
        fill="#F0C14A"
        stroke="#0A0A0C"
        strokeWidth="1.5"
      />
    </svg>
  );
};
