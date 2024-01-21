import { Button } from "../../types/strapiRes";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonProps: Button;
}
