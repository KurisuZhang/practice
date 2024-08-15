import {Outlet} from "react-router-dom";

function Profile() {
  return (
      <>
          <div className="text-center">
              <h1 className={"mt-3"}>Profile Page</h1>
              <h1 className={"mt-3"}>This is Profile Page</h1>
          </div>

          <Outlet></Outlet>
      </>


  );
}

export default Profile;
