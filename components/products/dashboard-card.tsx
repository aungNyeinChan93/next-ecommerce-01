"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  products: any;
}
const ProductCard = ({ className, products }: Props) => {
  return (
    <React.Fragment>
      <Card className={cn(className)}>
        <CardHeader>
          <CardTitle> {"Products"}</CardTitle>
          <CardDescription>
            <p className="my-2 text-red-500">
              Avaliable products - {products?.activeProducts}
              {products?.activeProducts > 1 ? " itmes" : " item"}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            {products?.totalProduct + " product" ||
              ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              dolorem at consequatur.`}
          </p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ProductCard;
