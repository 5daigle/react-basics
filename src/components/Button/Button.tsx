import React from "react";
import { css } from '@emotion/react'
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {

  const color = 'darkgreen'
  
  const style = css`
  background-color: hotpink;
  &:hover {
    color: ${color};
  }
  `
  return (
  <button css={style}>
    {props.label}
  </button>
  );
};

export default Button;