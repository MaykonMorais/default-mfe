import React from "react";

import { FooterProps } from "./types";
import styles from "./styles";

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div className="footer">
      <h1 className="footer__title">{title}</h1>

      <style jsx>{styles}</style>
    </div>
  );
};

export default Footer;
