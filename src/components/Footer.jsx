import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Gerrard Xiong ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
