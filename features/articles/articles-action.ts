
'use server'

import { ArticleSchema } from "@/lib/zod-schema/articles-schema";
import { imageUpload } from "./articles-utils";
import { getAuthUser } from "../auth/auth-utils";
import { prisma } from '@/lib/prisma-client'

export async function createArticleAction(
    initialState: any,
    formData: FormData
) {
    const data = Object.fromEntries(formData.entries());

    // validation 

    const { success, data: fields, error } = await ArticleSchema.safeParseAsync({ ...data })

    if (!success) {
        return {
            success, errrors: {
                title: error?.format()?.title?._errors[0],
                content: error?.format()?.content?._errors[0],
                image: error?.format()?.image?._errors[0],
            }
        }
    }
    let imagePath;
    if (fields?.image) {
        imagePath = await imageUpload(fields?.image, '/articles')
    }

    const authUser = await getAuthUser();

    try {
        const article = await prisma.article.create({
            data: { ...fields, image: imagePath, author_id: authUser && authUser?.id || '' }
        })

        console.log({ article });

        if (!article) {
            return { success: false, errors: { other: 'create articles fail' } }
        }
        return { success: true };

    } catch (error) {
        return {
            success, errrors: {
                other: error instanceof Error ? error?.message : 'create article fail'
            }
        }
    }

}
