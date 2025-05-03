import { ReactNode } from "react";

type LinkButtonsProps = {
  url: string;
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

export { LinkButton };
