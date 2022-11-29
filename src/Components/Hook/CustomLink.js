import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{
          color: match ? "#2EACAA" : "#4B4B4B",
          borderLeft: match ? "8px solid #2EACAA" : "",
          borderRadius: match ? "0px" : "",
          backgroundColor: match ? "#F8F8F8" : "#FFFFFF",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
