import { FC } from "react";

function Button(props: ButtonDto) {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

interface ButtonDto {
  children: React.ReactNode;
  onClick?(): void;
  type: "button" | "submit";
  disabled: boolean;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
};
