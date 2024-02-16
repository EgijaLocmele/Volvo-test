import React, { ReactNode } from "react";

interface LinkProps {
  text?: string;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

const Link: React.FC<LinkProps> = ({ text, href, className, icon }) => {
  return (
    <a href={href} className={className}>
      {text && <span className="link-text">{text}</span>}
      {icon && <span className="link-icon">{icon}</span>}
    </a>
  );
};

export default Link;
