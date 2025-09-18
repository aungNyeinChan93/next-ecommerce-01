import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductById, ProductType } from "@/features/products/products-util";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  ArrowUpLeftFromSquare,
  Circle,
  CornerDownLeft,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const PrductDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const product: ProductType | undefined | null =
    (id && (await getProductById(id))) || undefined;
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 p-4">
        <div className="flex flex-col gap-4">
          <section className="flex justify-center">
            <Card className="min-w-sm sm:w-md md:w-lg lg:w-5xl">
              <CardHeader>
                <CardTitle>{product?.name}</CardTitle>
                <p className="text-sm text-slate-500 mt-1">
                  {product?.created_at.toLocaleTimeString()}
                </p>
                <CardAction>
                  <Link href={"/products"}>
                    <CornerDownLeft />
                  </Link>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="flex">
                  <img
                    className=" basis-2/6 w-90 h-90 object-contain"
                    src={`${product?.imagePath}` || "next.svg"}
                    alt=""
                  />
                  <div className=" bg-slate-50 p-4 rounded-2xl w-full basis-4/6">
                    <p className="text-base leading-10 text-slate-600 font-semibold">
                      {product?.description}
                    </p>
                    <p className="text-red-600 text-lg">
                      Prize : {product?.price}
                    </p>
                    <p className="text-sm text-slate-500  mt-3">
                      Stock :
                      {product?.isStock ? (
                        <span className="text-sky-600 ps-3">
                          {"avaliable stock"}
                        </span>
                      ) : (
                        <span className="text-red-600 ps-3">
                          {"out of stock"}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default PrductDetailPage;
