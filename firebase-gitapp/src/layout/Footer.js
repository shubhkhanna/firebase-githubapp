import React from "react";
import { Container } from "reactstrap";
const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="fixed-bottom text-center bg-dark p-3 text-white"
      style={{ fontSize: "1.2em" }}
    >
      Github Search App
    </Container>
  );
};

export default Footer;
