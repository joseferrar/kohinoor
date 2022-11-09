import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="breadcrumbs" style={{ display: "flex" }}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        return (
          <div
            className="bc"
            key={index}
            style={{ color: "gray", fontSize: 12}}
          >
            <Link
              to={match.pathname || ""}
              style={{ color: "gray", fontSize: 12 }}
            >
              {breadcrumb}
            </Link>
            {index < breadcrumbs.length - 1 && " > "}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
