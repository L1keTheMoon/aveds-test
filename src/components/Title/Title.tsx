import { type HTMLAttributes } from "react";
import "./Title.css";

export default function Title({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={`title ${className}`} {...props}>
      {children}
    </h1>
  );
}
