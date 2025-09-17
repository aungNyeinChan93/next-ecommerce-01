import ArticleDetail from "@/components/articles/article-detail";
import {
  getArticleById,
  type ArticleType,
} from "@/features/articles/articles-utils";
import React from "react";

interface Props {
  params: Promise<{ id?: string }>;
}

const DetailArticlePage = async ({ params }: Props) => {
  const { id } = await params;

  const article = await getArticleById(id);
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 p-4">
        <ArticleDetail article={article} />
      </main>
    </React.Fragment>
  );
};

export default DetailArticlePage;
