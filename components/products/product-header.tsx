"use client";

import Link from "next/link";
import React from "react";

interface Props extends Omit<React.ComponentProps<typeof Link>, "className"> {
  children: React.ReactNode;
}
const ProductHeader = ({ children, ...props }: Props) => {
  return (
    <React.Fragment>
      <div className="flex p-4 justify-between gap-4 items-center w-full bg-lime-200/80 rounded-2xl shadow-md shadow-orange-300">
        <h3 className="text-2xl font-semibold tracking-wider text-sky-400">
          {children}
        </h3>
        <Link className="text-xl" {...props}>
          ➕
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ProductHeader;
