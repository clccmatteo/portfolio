import React from "react";

const Layout = ({ children }) => (
  <html>
    <body>
      <div>
        <header>{/* Header content */}</header>
        <main>{children}</main>
        <footer>{/* Footer content */}</footer>
      </div>
    </body>
  </html>
);

export default Layout;
