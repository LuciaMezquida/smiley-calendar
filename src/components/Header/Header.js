import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link className="link" to="/about">
      <p className="header">About</p>
    </Link>
  );
};
export default React.memo(Header);
