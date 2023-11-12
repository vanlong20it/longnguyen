import React from "react";
import Button from "../Base/Button";

const UserProfile = () => {
  return (
    <div className="flex items-center gap-4">
      <Button type="button">Log in</Button>
      <Button type="button" accent="secondary">
        Sign up
      </Button>
    </div>
  );
};

export default UserProfile;
