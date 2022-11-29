import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLinkP = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{
          color: match ? "#2EACAA" : "#4B4B4B",
          borderBottom: match ? "2px solid #2EACAA" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLinkP;
