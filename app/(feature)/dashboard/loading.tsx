import { Loader2 } from "lucide-react";
import React from "react";

const DashboardLoading = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <Loader2 className=" animate-spin" size={60} />
      </main>
    </React.Fragment>
  );
};

export default DashboardLoading;
