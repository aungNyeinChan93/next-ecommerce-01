import { Prisma } from "@/server/generated/prisma";
import fs from "fs";
import { appRouterContext } from "next/dist/server/route-modules/app-route/shared-modules";
import path from "path";

export async function imageUpload(file?: File, dir?: string) {
  if (!fs.existsSync(`public/${dir as string}`)) {
    await fs.promises.mkdir(`${path.resolve()}/public/${dir as string}`);
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
