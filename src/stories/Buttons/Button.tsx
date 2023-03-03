import React from 'react';
import Style from './button.module.css';
import {ButtonProps} from './ButtonProps'

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC <ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? Style.primary : Style.secondary;
  return (
    <button
      type="button"
      className={`${Style.storybookButton} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
