import React from "react";
import { css } from '@emotion/react'
export interface ButtonProps {
  label: string;
}

const color = 'darkgreen'
const style = css`
background-color: hotpink;
&:hover {
  color: ${color};
}
`

const Button = (props: ButtonProps) => {
  return (
  <button css={style}>
    {props.label}
  </button>
  );
};

export default Button;