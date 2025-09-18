import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProductsData } from "@/features/products/products-util";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

const ProductsTable = async () => {
  const { products, totalProduct } = await getProductsData();
  return (
    <React.Fragment>
      <section className="p-4 shadow-xl bg-lime-200 rounded-2xl mt-5 ">
        <Table>
          <TableCaption>A list of product.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <span className="w-[100px]"></span>
              </TableHead>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="">
                <span className="">Action</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products &&
              Array.isArray(products) &&
              products?.map((product) => (
                <TableRow key={product?.id}>
                  <TableCell>
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={product?.imagePath || "/next.svg"} />
                      <AvatarFallback>PI</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{product?.name}</TableCell>
                  <TableCell>{"$ " + product?.price}</TableCell>
                  <TableCell className="text-start">
                    {product?.isStock ? (
                      <>
                        <CheckCircle2 style={{ color: "green" }} />
                      </>
                    ) : (
                      <>
                        <XCircle />
                      </>
                    )}
                  </TableCell>
                  <TableCell className="text-start">
                    <Button type="button" asChild variant={"outline"}>
                      <Link href={`/products/${product?.id}`}>Detail</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </section>
    </React.Fragment>
  );
};

export default ProductsTable;
