'use server'

import { CommentSchema } from "@/lib/zod-schema/comments-schema";
import { getAuthUser } from "../auth/auth-utils";



export async function createCommentAction(initialState: any, formData: FormData) {

    const body = formData.get('body') as string;
    const article_id = formData.get('article_id') as string;
    const authUser = await getAuthUser()

    const { success, data: field, error } = await CommentSchema.safeParseAsync({ body })

    if (!success) {
        return { success, errors: { body: error?.format().body?._errors[0] } }
    };

    if (!article_id && !authUser) return { success: false, errors: { body: 'unknown error' } }

    try {
        await prisma?.comment.create({
            data: { body, article_id, user_id: authUser?.id as string }
        })
    } catch (error) {
        return { success, errors: { body: error instanceof Error ? error?.message : 'unknown error' } }

    }
    return { success: true }
};



export async function commentDeleteAction(id: string) {
    const deleteComment = !!(await prisma?.comment.delete({
        where: { id: id as string }
    }))

    return deleteComment;
}