import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="breadcrumbs" style={{ display: "flex", marginTop: "20px" }}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        const data = breadcrumb.props.children?.split("%");
        const num = data[1]?.replace(/[0-9]/g, " ");
        const final = data[0] + num;

        return (
          <div
            className="bc"
            key={index}
            style={{ color: "gray", fontSize: 12 }}
          >
            <Link
              to={match.pathname || ""}
              style={{ color: "gray", fontSize: 14, textDecoration: "none" }}
            >
              {final.replace("undefined", "")}
            </Link>
            {index < breadcrumbs.length - 1 && " > "}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
