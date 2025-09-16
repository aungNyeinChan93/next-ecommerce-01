import z from "zod";


export type ProductType = z.infer<typeof ProductSchema>

export const ProductSchema = z.object({
    name: z.string().min(1, 'name field is required'),
    price: z.coerce.number().min(1, 'price field is required'),
    description: z.string().min(1, 'description field is required').refine(res => res.length < 100, 'too long!'),
    image: z.instanceof(File)
        .refine(file =>
            file.size > 0, 'file required'
        )
        .refine(
            (file) =>
                ['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type),
            'image not supported')
        .optional(),
    file: z.instanceof(File)
        .refine(file =>
            file.size > 0, 'file required'
        )
        .refine(
            (file) =>
                ['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type),
            'file not supported'
        )
        .optional(),
})