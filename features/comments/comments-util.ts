import { Prisma } from "@/server/generated/prisma"


export type CommentType = Prisma.CommentGetPayload<{
    include: {
        article: true,
        user: true
    }
}>

export async function getAllCommentsById(article_id: string) {
    const comments = await prisma?.comment.findMany({
        where: { article_id: article_id as string },
        include: {
            user: true,
            article: true
        }
    })
    return comments
}