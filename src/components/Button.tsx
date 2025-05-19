import { ReactNode } from "react";

type LinkButtonsProps = {
  url: string;
  className?: string;
  children: ReactNode;
};

type ButtonProps = {
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

const LinkButton = ({ url, className, children }: LinkButtonsProps) => {
  return (
    <a href={url} className={`button ${className}`}>
      {children}
    </a>
  );
};

const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { LinkButton, Button };
