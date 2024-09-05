/** @jsxImportSource @emotion/react */
import React from "react";
import {
  FooterContainer,
  CopyrightSection,
  LinksSection,
  LinksColumn,
} from "./styles";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightSection>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </CopyrightSection>

      <LinksSection>
        <LinksColumn>
          <Link href="/home">Home</Link>
          <Link href="/about">About Us</Link>
        </LinksColumn>

        <LinksColumn>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>
        </LinksColumn>

        <LinksColumn>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </LinksColumn>
      </LinksSection>
    </FooterContainer>
  );
};

export default Footer;
