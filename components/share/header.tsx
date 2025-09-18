import Link from "next/link";
import React, { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<typeof Link>;

const Header: React.FC<Props> = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <main className="p-4 w-full mx-auto max-w-5xl  rounded-2xl bg-slate-50">
        <div className="flex justify-between items-center">
          <h3 className={props.className}>{children}</h3>
          <Link {...props}>➕</Link>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Header;
