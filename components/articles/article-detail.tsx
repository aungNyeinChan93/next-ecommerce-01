import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArticleType } from "@/features/articles/articles-utils";
import { Button } from "../ui/button";
import ArticleComments from "./article-commets";
import { MessageCircle } from "lucide-react";
import CreateCommentForm from "./create-comment-form";
import {
  CommentType,
  getAllCommentsById,
} from "@/features/comments/comments-util";

interface Props {
  article?: ArticleType | null;
}

const ArticleDetail = async ({ article }: Props) => {
  const comments: CommentType[] | null | undefined =
    article && (await getAllCommentsById(article?.id));

  console.log({ comments, article });

  return (
    <React.Fragment>
      <main className=" flex justify-center items-center">
        <div className="flex flex-col space-y-6">
          <Card className="w-full px-3 mx-2 sm:w-sm lg:w-5xl">
            <CardTitle className="ms-6 text-xl ">{article?.title}</CardTitle>
            <CardContent className=" leading-loose">
              {article?.content}
            </CardContent>
            <CardFooter>
              <div className="flex justify-around items-center space-x-4">
                <MessageCircle size={30} />
                <p>{article?.comments.length}</p>
              </div>
            </CardFooter>
          </Card>
          <section>
            <ArticleComments
              comments={comments}
              commentCreateForm={<CreateCommentForm article={article} />}
            />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ArticleDetail;
