import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <a href="/" className="about">
      About
    </a>
  );
};
export default React.memo(Header);
