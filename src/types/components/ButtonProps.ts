import { CalculatorButton } from "./CalculatorButton";
export interface ButtonProps {
  button: CalculatorButton;
  onClick: (button: CalculatorButton) => void;
}
