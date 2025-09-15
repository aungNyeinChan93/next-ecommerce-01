import DashboardCard from "@/components/dashboard/dashboard-card";
import ProductCard from "@/components/products/dashboard-card";
import UserCard from "@/components/users/user-card";
import { getProductsData } from "@/features/products/products-util";
import { getTotalSales } from "@/features/sales/sales-util";
import { getUserData } from "@/features/users/users-util";
import React, { Suspense } from "react";

const DashboardPage = async () => {
  const [salesData, { usersCount, users }, productsData] = await Promise.all([
    getTotalSales(),
    getUserData(),
    getProductsData(),
  ]);
  return (
    <React.Fragment>
      <main className=" w-full min-h-screen bg-green-50">
        {/* card section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <Suspense fallback={<>Loading . . .</>}>
            <DashboardCard className={"bg-red-200"} data={salesData} />
          </Suspense>
          <UserCard
            className="bg-green-200"
            users={users}
            usersCount={usersCount}
          />
          <ProductCard className="bg-lime-200" products={productsData} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
