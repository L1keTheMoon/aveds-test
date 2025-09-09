import { type ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "outline";
}

export default function Button({
  className = "",
  children,
  variant = "normal",
  ...props
}: ButtonProps) {
  return (
    <button className={`button ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
