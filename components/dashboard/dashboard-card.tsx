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
  data?: any;
  className?: string;
}
const DashboardCard = ({ className, data }: Props) => {
  return (
    <React.Fragment>
      <Card className={cn(className)}>
        <CardHeader>
          <CardTitle> {"Sale"}</CardTitle>
          <CardDescription>
            <p className="my-2">{`data?.amount`}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xs">
            {data?.numberOfSales + " orders" ||
              ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              dolorem at consequatur.`}
          </p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default DashboardCard;
