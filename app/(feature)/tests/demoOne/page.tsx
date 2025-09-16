import { fileUpload } from "@/features/products/products-util";
import React from "react";

const DemoOne = async () => {
  return (
    <React.Fragment>
      <main>
        <form
          action={async (formData: FormData) => {
            "use server";
            const file = formData.get("image") as File;
            const imagePath = await fileUpload(file, "football-images");
            console.log(imagePath);
          }}
        >
          <input type="file" name="image" id="" />
          <button type="submit">upload</button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default DemoOne;
