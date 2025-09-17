import { ArticleType } from "@/features/articles/articles-utils";
import Link from "next/link";
import React from "react";

interface Props {
  article?: ArticleType;
}
const ArticleCard = ({ article }: Props) => {
  return (
    <React.Fragment>
      <Link href={`/articles/${article?.id}`}>
        <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img
            alt=""
            src={
              article?.image ||
              "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                {article?.title || "t, consectetur adipisicing elit   "}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {article?.content ||
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium
              dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
              minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?`}
            </p>
          </div>
        </article>
      </Link>
    </React.Fragment>
  );
};

export default ArticleCard;
