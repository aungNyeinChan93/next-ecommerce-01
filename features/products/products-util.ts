import { Prisma, PrismaClient } from '@/server/generated/prisma';
import fs from 'fs'
import path from 'path'

// products data
export async function getProductsData() {
    const [products, totalProduct, activeProducts] = await Promise.all([
        prisma?.products.findMany({
            include: { downloadVerifications: true, orders: true }
        }),
        prisma?.products.count(),
        prisma?.products.count({ where: { isStock: true } })
    ])
    return { products, totalProduct, activeProducts }
}

// product file save
export async function fileUpload(file?: File, dir?: string,) {
    // cretae dir
    if (!fs.existsSync(dir as string)) {
        await fs.promises.mkdir(`${process.cwd()}/public/${dir as string}`, { recursive: true });
    };

    // make path
    const fileName = `${crypto.randomUUID()}-${file?.name}`
    const filePath = (path.join(dir as string, fileName))

    // make buffer
    const fileBuffer = Buffer.from(await (file as File)?.arrayBuffer());

    // save file
    if (filePath) {
        await fs.promises.writeFile(`public/${filePath}`, fileBuffer);
    }
    return filePath;
}

export type ProductType = Prisma.ProductsGetPayload<{
    include: { _count: { select: { orders: true } }, orders: true, downloadVerifications: true }
}>
// get product
export async function getProductById(id?: string) {
    const product = await prisma?.products.findUnique({
        where: { id },
        include: { orders: true, _count: { select: { orders: true } }, downloadVerifications: true }
    })
    return product;
}