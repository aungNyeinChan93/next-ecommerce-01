"use client";

import React, { useActionState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { createCommentAction } from "@/features/comments/comments-action";
import { ArticleType } from "@/features/articles/articles-utils";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

interface Props {
  article?: ArticleType | null;
}

const CreateCommentForm = ({ article }: Props) => {
  const [state, formAction] = useActionState(createCommentAction, undefined);

  if (state?.success) {
    toast.success("comment success!", { position: "top-center" });
    return redirect(`/articles/${article?.id}`);
  }
  return (
    <React.Fragment>
      <main>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-sky-500">
              Create Comment
            </CardTitle>
            <CardContent>
              <form action={formAction}>
                <input type="hidden" name="article_id" value={article?.id} />
                <div className="mt-3">
                  {!state?.success && (
                    <>
                      <p className="text-red-600 ">{state?.errors?.body}</p>
                    </>
                  )}
                  <Textarea
                    placeholder="enter comment"
                    name="body"
                    className="p-5 mt-3 h-30"
                  />
                </div>
                <Button type="submit" className="mt-3" variant={"secondary"}>
                  Save
                </Button>
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default CreateCommentForm;
