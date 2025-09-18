"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  ArrowLeftRight,
  CircleChevronRight,
  MoreVertical,
  Settings,
  Trash,
} from "lucide-react";
import { Card } from "../ui/card";
import { ProductType } from "@/features/products/products-util";
import Link from "next/link";
import {
  changeStockStatus,
  deleteProductById,
} from "@/features/products/products-actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props {
  product?: ProductType | null;
}

const ProductTableAction = ({ product }: Props) => {
  const [isShowAction, setShowAction] = useState<boolean>(false);
  const router = useRouter();
  return (
    <React.Fragment>
      <main className="">
        <Button
          onMouseLeave={() => setShowAction(false)}
          variant={"outline"}
          type="button"
          asChild
          onClick={() => setShowAction((prev) => !prev)}
        >
          <div className=" relative ">
            <MoreVertical className="" />
            <div
              className={`absolute top-0 right-7 z-1 ${
                !isShowAction ? "hidden" : ""
              }`}
            >
              <Card className="w-[150px] h-auto">
                <div className=" flex flex-col space-y-2">
                  <Button
                    asChild
                    variant={"outline"}
                    className=" p-2 bg-slate-50 mx-4 rounded-2xl hover:bg-slate-100"
                  >
                    <Link href={`/products/${product?.id}`}>
                      Detail <CircleChevronRight />
                    </Link>
                  </Button>
                  <Button
                    type="button"
                    variant={"outline"}
                    className=" p-3 bg-sky-300 mx-4 rounded-2xl hover:bg-sky-400"
                    onClick={async () => {
                      const res = await changeStockStatus(
                        product?.id,
                        !product?.isStock
                      );
                      if (!res) return;
                      if (res) {
                        toast.success("status change success!");
                      }
                      router.push("/products");
                    }}
                  >
                    Status <ArrowLeftRight />
                  </Button>
                  <Button
                    variant={"destructive"}
                    type="button"
                    className=" p-2 mx-4 rounded-2xl hover:bg-red-400"
                    onClick={async () => {
                      const success = await deleteProductById(product?.id);
                      if (!success) return toast.error("delete fail");
                      toast.success("delete success", { duration: 2000 });
                      return router.push("/products");
                    }}
                  >
                    Delete <Trash />
                  </Button>
                  <Button
                    variant={"outline"}
                    type="button"
                    className=" p-2 mx-4 bg-lime-400 rounded-2xl hover:bg-lime-200"
                    onClick={async () => {}}
                  >
                    <Link
                      href={"/products/edit"}
                      className="flex gap-3 items-center"
                    >
                      {" "}
                      Edit <Settings />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Button>
      </main>
    </React.Fragment>
  );
};

export default ProductTableAction;
