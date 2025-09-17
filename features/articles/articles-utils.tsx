import { Prisma } from "@/server/generated/prisma";
import fs from "fs";
import path from "path";

export async function imageUpload(file?: File, dir?: string) {
  if (!fs.existsSync(`public/${dir as string}`)) {
    await fs.promises.mkdir(`${path.resolve()}/public/${dir as string}`, {
      recursive: true,
    });
  }

  const fileName = `${crypto.randomUUID()}-${file?.name}`;
  const filePath = path.join(dir as string, fileName);

  await fs.promises.writeFile(
    path.join("public", filePath),
    Buffer.from(await (file as File)?.arrayBuffer())
  );

  return filePath;
}

export type ArticleType = Prisma.ArticleGetPayload<{
  include: { author: true; comments: true };
}>;
export async function getAllArticles() {
  const articles = await prisma?.article.findMany({
    include: {
      author: true,
      comments: true,
    },
  });
  return articles;
}

// get article by id

export async function getArticleById(id?: string) {
  const article = await prisma?.article.findUnique({
    where: { id: id as string },
    include: { author: true, comments: true },
  });
  return article;
}
