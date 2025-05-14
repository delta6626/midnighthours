import { ReactNode } from "react";

type LinkButtonsProps = {
  url: string;
  className?: string;
  children: ReactNode;
};

type ButtonProps = {
  className?: string;
  children: ReactNode;
};

const LinkButton = ({ url, className, children }: LinkButtonsProps) => {
  return (
    <a href={url} className={`button ${className}`}>
      {children}
    </a>
  );
};

const Button = ({ className, children }: ButtonProps) => {
  return <button className={`button ${className}`}>{children}</button>;
};

export { LinkButton };
