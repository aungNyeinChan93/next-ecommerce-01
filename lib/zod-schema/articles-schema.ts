import z from "zod";


export const ArticleSchema = z.object({
    title: z.string().min(1, 'Title field is required'),
    content: z.string().max(5000, ' max character 300'),
    image: z.instanceof(File)
        .refine(file => file.size > 0, 'Image field is required')
        // .refine(file => typeof file === typeof File, 'image field must be file type')
        .refine(file => ['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type), 'unsupport file type')
})