import DashboardCard from "@/components/dashboard/dashboard-card";
import { getTotalSales } from "@/features/sales/sales-util";
import React from "react";

const DashboardPage = async () => {
  const salesData = await getTotalSales();
  return (
    <React.Fragment>
      <main className=" w-full min-h-screen bg-green-50">
        {/* card section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <DashboardCard className={"bg-red-200"} data={salesData} />
          <DashboardCard className="bg-green-200" />
          <DashboardCard className="bg-cyan-200" />
          <DashboardCard className="bg-lime-200" />
        </section>
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
