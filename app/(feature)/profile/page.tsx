import { getAuthUser } from "@/features/auth/auth-utils";
import React from "react";

const ProfilePage = async () => {
  const authUser = await getAuthUser();
  return (
    <React.Fragment>
      <main>
        <div>{JSON.stringify(authUser, null, 2)}</div>
      </main>
    </React.Fragment>
  );
};

export default ProfilePage;
