"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useActionState, useState } from "react";
import { createProductAction } from "@/features/products/products-actions";
import Link from "next/link";
import { error } from "console";
import { redirect, RedirectType } from "next/navigation";

export function ProductForm() {
  const [state, formAction, isPending] = useActionState(
    createProductAction,
    undefined
  );

  const [isStock, setIsStock] = useState<boolean>(true);

  if (state?.success) {
    return redirect("/products", RedirectType.replace);
  }
  return (
    <Card className="w-full sm:w-[600px]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Product Form</CardTitle>
          <CardAction>
            <Button asChild variant="link">
              <Link href={"/products"}>Back</Link>
            </Button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          {!state?.success && (
            <p className="text-sm text-red-600">{state?.errors?.other}</p>
          )}
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              {!state?.success && (
                <p className="text-red-600 p-1 text-sm">
                  {state?.errors?.name}
                </p>
              )}
              <Input
                id="name"
                type="text"
                placeholder="product name"
                name="name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="desc">Description</Label>
              {!state?.success && (
                <p className="text-red-600 p-1 text-sm">
                  {state?.errors?.description}
                </p>
              )}

              <Textarea
                id="desc"
                className="h-25"
                placeholder="product desc"
                name="description"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              {!state?.success && (
                <p className="text-red-600 p-1 text-sm">
                  {state?.errors?.price}
                </p>
              )}

              <Input
                id="price"
                type="number"
                placeholder="price"
                name="price"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="file">File</Label>
              {!state?.success && (
                <p className="text-red-600 p-1 text-sm">
                  {state?.errors?.file}
                </p>
              )}

              <Input
                id="file"
                type="file"
                multiple
                placeholder="image"
                name="file"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image</Label>
              {!state?.success && (
                <p className="text-red-600 p-1 text-sm">
                  {state?.errors?.image}
                </p>
              )}

              <Input
                id="image"
                type="file"
                multiple
                placeholder="image"
                name="image"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="stock"
                name="stock"
                checked={isStock ? true : false}
                onChange={(e) => setIsStock(e.target.checked)}
              />
              <Label htmlFor="stock" className="text-sky-600">
                Stock is Avaliable
              </Label>
            </div>
          </div>
          <Button type="submit" className="w-full mt-5" disabled={isPending}>
            Save ➕
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
