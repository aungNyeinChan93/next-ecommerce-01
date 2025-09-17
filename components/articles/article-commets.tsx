"use client";

import React, { ReactNode, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import CommentCard from "./comment-card";
import { CommentType } from "@/features/comments/comments-util";

interface Props {
  comments?: CommentType[] | null;
  commentCreateForm?: ReactNode;
}

const ArticleComments = ({ comments, commentCreateForm }: Props) => {
  const [commentShow, setCommentShow] = useState<boolean>(true);
  const [showCreateComment, setCreateComment] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Card className="w-full px-3 mx-2 sm:w-sm lg:w-5xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              <p>Comments</p>
            </CardTitle>
            <CardAction className="flex space-x-4">
              <Button
                type="button"
                variant={"outline"}
                className=" cursor-pointer"
                onClick={() => setCommentShow((prev) => !prev)}
              >
                ➕
              </Button>
              <Button
                className=""
                type="button"
                onClick={() => setCreateComment((prev) => !prev)}
              >
                Create Comment
              </Button>
            </CardAction>
          </div>
        </CardHeader>

        {showCreateComment && <>{commentCreateForm}</>}

        {commentShow && (
          <>
            {comments &&
              Array.isArray(comments) &&
              comments?.map((comment) => (
                <CommentCard key={comment?.id} comment={comment} />
              ))}
          </>
        )}
      </Card>
    </React.Fragment>
  );
};

export default ArticleComments;
