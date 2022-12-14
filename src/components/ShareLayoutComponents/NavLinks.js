import React from "react";
import { NavLink } from "react-router-dom";
import links from "../../utils/links";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map(({ id, text, path, icon }) => {
        return (
          <NavLink
            key={id}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to={path}
            onClick={toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
