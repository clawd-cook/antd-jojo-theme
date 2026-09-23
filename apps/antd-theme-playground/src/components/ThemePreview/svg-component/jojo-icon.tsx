import React from "react";

interface JojoIconProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Star + ink outline mark echoing JoJo stand energy. */
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
      <title>JoJo Theme Icon</title>
      <rect x="1.5" y="1.5" width="61" height="61" fill="#FFF3E6" stroke="#0A0A0A" strokeWidth="3" />
      <path
        d="M32 10 L37.5 24.5 L53 26 L41.5 36.5 L45 52 L32 43.5 L19 52 L22.5 36.5 L11 26 L26.5 24.5 Z"
        fill="#FFC107"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
      <circle cx="32" cy="32" r="6" fill="#7B1FA2" stroke="#0A0A0A" strokeWidth="2.5" />
    </svg>
  );
};
