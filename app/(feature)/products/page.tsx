import ProductsTable from "@/components/products/prducts-table";
import ProductHeader from "@/components/products/product-header";
import React from "react";

const ProductsPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 p-4">
        <ProductHeader href={"/products/create"}>Products</ProductHeader>
        <ProductsTable />
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;
