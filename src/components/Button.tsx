import type { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
