'use server'

import { ProductSchema } from "@/lib/zod-schema/products-schema";
import { da } from "zod/locales";
import { fileUpload } from "./products-util";



// create product 
export async function createProductAction(initialState: any, formData: FormData) {
    // const name = formData.get('name') as string;
    // const description = formData.get('description') as string;
    // const price = formData.get('price') as number | string;
    // const image = formData.get('image') as File;
    // const file = formData.get('file') as File;
    const stock = formData.get('stock') as null | string;

    const data = Object.fromEntries(formData.entries())

    const { success, data: fields, error } = await ProductSchema.safeParseAsync({ ...data })

    // validation
    if (!success) {
        return {
            success, errors: {
                name: error.format().name?._errors[0],
                description: error.format().description?._errors[0],
                price: error.format().price?._errors[0],
                file: error.format().file?._errors[0],
                image: error.format().image?._errors[0],
                other: ''
            }
        }
    };

    // file save
    if (!fields?.file && !fields.image) {
        return
    }
    const filePath = await fileUpload(fields.file as File, '/products/files');
    const imagePath = await fileUpload(fields.file as File, '/products/images');

    if (!filePath && !imagePath) {
        return {
            success: false, errors: {
                other: 'filepath and imagePath are fail'
            }
        }
    }

    // create new product
    try {
        const result = await prisma?.products.create({
            data: {
                name: fields?.name as string,
                filePath: filePath as string,
                imagePath: imagePath as string,
                price: Number(fields?.price),
                description: fields?.description as string,
                isStock: stock === 'on' ? true : false
            }
        });

        if (result) {
            return { success: true }
        }

    } catch (error) {
        return {
            success: false, errors: {
                other: error instanceof Error ? error?.message : 'product create fail!'
            }
        }
    }

}

export async function changeStockStatus(id?: string, stockStatus?: boolean) {
    const result = !!(await prisma?.products.update({
        where: { id: id as string },
        data: { isStock: stockStatus }
    }))
    return result;
};



export async function deleteProductById(id?: string) {
    const result = !!(await prisma?.products.delete({ where: { id } }))
    return result
}