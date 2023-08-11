import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const UserProfile = () => {
  const { user } = useAuth0();
  return (
    // fetch and display user data
    <div
      className="bg-white rounded-full shadow-md max-w-xs mx-auto relative"
      data-te-toggle="tooltip"
      data-te-placement="top"
      data-te-ripple-init
      data-te-ripple-color="light"
      title={user.name}
    >
      <div className="flex items-center justify-center ">
        <img
          src={user.picture}
          alt="User profile"
          className="w-12 h-12 rounded-full"
        />
        {/* show tooltip on hover of profile with user name */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300">
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
