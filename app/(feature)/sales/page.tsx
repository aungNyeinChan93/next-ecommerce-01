import { getTotalSales } from "@/features/sales/sales-util";
import React from "react";

const SalesPage = async () => {
  const { amount, numberOfSales } = await getTotalSales();
  return (
    <React.Fragment>
      <main></main>
    </React.Fragment>
  );
};

export default SalesPage;
