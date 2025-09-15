import { ProductForm } from "@/components/products/product-form";
import ProductHeader from "@/components/products/product-header";
import React from "react";

const CreateProducts = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4 bg-green-50">
        <ProductHeader href={"/"}>Create Product</ProductHeader>
        <section className="flex w-full min-h-auto mt-9 justify-center items-center">
          <ProductForm />
        </section>
      </main>
    </React.Fragment>
  );
};

export default CreateProducts;
