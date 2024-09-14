import React from "react";
import { IconType } from "react-icons";

export type ButtonProps = {
  label?: string;
  left_icon?: IconType;
  right_icon?: IconType;
};

export function Button({
  label,
  left_icon,
  right_icon,
}: ButtonProps): React.ReactElement {
  return (
    <button className="flex items-center gap-1 w-fit">
      {left_icon && React.createElement(left_icon)}
      {label}
      {right_icon && React.createElement(right_icon)}
    </button>
  );
}
