import React from "react";
import EditProfile from "./EditProfile";

const Profile = () => {
  return (
    user && (
      <div>
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
