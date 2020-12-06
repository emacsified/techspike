import React, { MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: any;
  name?: string;
  classNames?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-full mx-4 mt-4  ${props.classNames} w-24`}
      name={props.name}
    >
      {props.children}
    </button>
  );
};

export default Button;
