import ArticleCard from "@/components/articles/article-card";
import ProductHeader from "@/components/products/product-header";
import {
  type ArticleType,
  getAllArticles,
} from "@/features/articles/articles-utils";
import React from "react";

const ArticlesPage = async () => {
  const articles: ArticleType[] | undefined = await getAllArticles();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 p-4">
        <ProductHeader href={"/articles/create-article"}>
          Articles
        </ProductHeader>

        <section className="w-full h-auto px-5 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {articles &&
              Array.isArray(articles) &&
              articles?.map((article) => (
                <ArticleCard key={article?.id} article={article} />
              ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ArticlesPage;
