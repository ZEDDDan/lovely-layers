import { FC } from "react";

import { ButtonDefault } from "./ButtonDefault";

import "./styles.css";
import { ButtonProps } from "./types";

interface IButton extends ButtonProps {
  btnType?: string;
}

const Button: FC<IButton> = ({ btnType, ...props }) => {
  switch (btnType) {
    default:
      return <ButtonDefault {...props} />;
  }
};

export default Button;
