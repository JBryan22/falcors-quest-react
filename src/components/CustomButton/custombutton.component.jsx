import React from "react";
import "./custombutton.styles.scss";

const STYLES = ["btn-standard", "btn-inverted"];

const SIZES = ["btn-medium", "btn-small"];

export const CustomButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const setButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`custom-button ${setButtonStyle} ${setButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
