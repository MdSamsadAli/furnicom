import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ to, label }) {
  return (
    <li className="mr-5 hover:text-red-600">
      <Link to={to}>{label}</Link>
    </li>
  );
}
