// src/components/Dashboard.js
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            React App
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="overview">Product</Link>
            </li>
            <li>
              <Link to="settings">Form</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
