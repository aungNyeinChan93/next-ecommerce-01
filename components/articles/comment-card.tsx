"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { CommentType } from "@/features/comments/comments-util";
import { Button } from "../ui/button";
import { commentDeleteAction } from "@/features/comments/comments-action";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

interface Props {
  comment?: CommentType | null;
}

const CommentCard = ({ comment }: Props) => {
  const session = authClient.useSession();
  const authUser_id = session && session?.data?.user?.id;

  return (
    <React.Fragment>
      <Card>
        <CardTitle>
          <div className="flex justify-between px-6">
            <div className="flex flex-col gap-4">
              <p>{comment?.user?.name}</p>
              <p className="text-xs tracking-wider font-sans text-slate-500">
                {comment?.createdAt.toLocaleTimeString()}
              </p>
            </div>
            {comment?.user_id === authUser_id && (
              <>
                <form
                  action={async () => {
                    if (!comment?.id) {
                      return;
                    }
                    const success = await commentDeleteAction(comment?.id);
                    if (success)
                      toast.success("delete success", {
                        className: "!bg-red-50 !text-red-500",
                      });
                    return redirect(`/articles/${comment?.article_id}`);
                  }}
                >
                  <Button type="submit" variant={"destructive"}>
                    Delete
                  </Button>
                </form>
              </>
            )}
          </div>
        </CardTitle>
        <CardContent>
          <p className="text-slate-500 text-sm"> {comment?.body}</p>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default CommentCard;
