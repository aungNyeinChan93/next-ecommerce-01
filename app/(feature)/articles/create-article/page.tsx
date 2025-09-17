"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createArticleAction } from "@/features/articles/articles-action";
import { Label } from "@radix-ui/react-label";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";

const CreateArticlePage = () => {
  const [state, formAction] = useActionState(createArticleAction, undefined);

  if (state?.success) {
    return redirect("/articles");
  }
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-slate-50 flex justify-center items-center">
        <Card className="w-full max-w-lg mx-4">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold tracking-wider">
              Create Article
            </CardTitle>
            <CardContent>
              <form action={formAction}>
                {!state?.success && (
                  <p className="text-red-600">{state?.errors?.other}</p>
                )}
                <div className="mt-3">
                  {!state?.success && (
                    <p className="text-sm text-red-600">
                      {state?.errrors?.title}
                    </p>
                  )}
                  <Label htmlFor="title">Title</Label>
                  <Input
                    type="text"
                    id="title"
                    placeholder="Enter Title"
                    className="p-5 mt-1"
                    name="title"
                  />
                </div>
                <div className="mt-3">
                  {!state?.success && (
                    <p className="text-sm text-red-600">
                      {state?.errrors?.content}
                    </p>
                  )}

                  <Label>Content</Label>
                  <Textarea
                    name="content"
                    placeholder="Enter Content"
                    className="h-40"
                  />
                </div>
                <div className="mt-3">
                  {!state?.success && (
                    <p className="text-sm text-red-600">
                      {state?.errrors?.image}
                    </p>
                  )}

                  <Label htmlFor="image">Image</Label>
                  <Input
                    type="file"
                    id="image"
                    placeholder="Enter image"
                    className=" mt-1"
                    name="image"
                  />
                </div>
                <Button type="submit" variant={"outline"} className="mt-6">
                  Create ➕
                </Button>
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default CreateArticlePage;
