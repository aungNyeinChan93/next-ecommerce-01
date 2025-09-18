import Header from "@/components/share/header";
import React from "react";

const DemoTwoPage = async () => {
  return (
    <React.Fragment>
      <main>
        <Header href={"/"} className="text-red-600 font-bold tracking-wider">
          Demo Two
        </Header>
      </main>
    </React.Fragment>
  );
};

export default DemoTwoPage;
