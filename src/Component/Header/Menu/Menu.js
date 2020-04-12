import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const router = [
    { labal: "Home", path: "/" },
    { labal: "About", path: "/about" },
    { labal: "Dental Services", path: "/dantal-service" },
    { labal: "Reviews", path: "/reviews" },
    { labal: "Blog", path: "/blog" },
    { labal: "Contact Us", path: "/contact" },
    { labal: "Dashboard", path: "/dashboard" },
  ];
  return (
    <div className="menu">
      <ul>
        {router.map((menu, index) => (
          <li key={index}>
            <Link to={menu.path}>{menu.labal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
