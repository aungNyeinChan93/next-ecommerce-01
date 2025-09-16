"use client";

import { fileUpload } from "@/features/products/products-util";
import { makeFolder } from "@/features/tests/tests-util";
import React, { useState } from "react";

const TestPage = () => {
  const [image, setImage] = useState<File | null>(null);
  return (
    <React.Fragment>
      <main>
        <input
          type="file"
          name="image"
          id=""
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <button
          className="px-4 py-2 bg-slate-50 rounded-2xl"
          type="button"
          onClick={async () => {
            await makeFolder("gogogaga");
            // await fileUpload(image as File, "banana", "test-image");
          }}
        >
          Make banana folder
        </button>
      </main>
    </React.Fragment>
  );
};

export default TestPage;
