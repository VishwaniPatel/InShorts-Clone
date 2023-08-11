import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LogoutIcon } from "@heroicons/react/outline";

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    // if user is logged in than display logout button otherwise display none
    <>
      {isAuthenticated ? (
        <div className="flex px-4 py-3 cursor-pointer" onClick={logout}>
          <LogoutIcon className="text-inverted h-6 cursor-pointer" />
          <span className="ps-3 text-inverted">Logout</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Logout;
