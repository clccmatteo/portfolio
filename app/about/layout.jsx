import React from "react";

const AboutLayout = ({ children }) => (
  <div>
    <header>{/* About page header */}</header>
    <main>{children}</main>
    <footer>{/* About page footer */}</footer>
  </div>
);

export default AboutLayout;
