"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <div className="p-4 bg-slate-900 w-full flex justify-center space-x-4">
        {children}
      </div>
    </React.Fragment>
  );
};
export default Navbar;

export function Navlink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pahtname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        `px-2 py-1 text-lg rounded  bg-slate-50 text-slate-600 hover:bg-slate-600 hover:text-slate-50`,
        pahtname === props?.href && `bg-slate-500 text-slate-100`
      )}
    />
  );
}
