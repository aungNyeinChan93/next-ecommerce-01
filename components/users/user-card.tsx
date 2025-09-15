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
import { User } from "@/server/generated/prisma";

interface Props {
  users?: User[] | null;
  usersCount?: number | undefined;
  className?: string;
}
const UserCard = ({ className, users, usersCount }: Props) => {
  return (
    <React.Fragment>
      <Card className={cn(className)}>
        <CardHeader>
          <CardTitle> {"Customer"}</CardTitle>
          <CardDescription>
            <p className="my-2 text-red-500">Total customer - {usersCount} </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            {usersCount + " customer" ||
              ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              dolorem at consequatur.`}
          </p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default UserCard;
