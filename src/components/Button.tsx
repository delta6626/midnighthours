import { ReactNode } from "react";
import Link from "next/link";

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
    <Link href={url} className={`button ${className}`}>
      {children}
    </Link>
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
