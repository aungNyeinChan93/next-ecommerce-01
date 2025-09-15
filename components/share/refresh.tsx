"use client";

import React, { useEffect, useRef } from "react";

const Refresh = () => {
  const testRef = useRef(true);
  if (testRef.current) {
    window.location.reload();
  }
  useEffect(() => {
    testRef.current = false;
  }, []);
  return (
    <React.Fragment>
      <main></main>
    </React.Fragment>
  );
};

export default Refresh;
