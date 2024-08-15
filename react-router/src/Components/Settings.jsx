import { Link, Outlet } from "react-router-dom";

function Settings() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="menu menu-vertical rounded-box bg-base-200 lg:menu-horizontal">
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="account">Account</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Settings;
