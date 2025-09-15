import Navbar, { Navlink } from "@/components/navbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

// admin page must be dynamic
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "dashboard page",
};

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default DashboardLayout;
