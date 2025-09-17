import fs from 'fs'
import path from 'path'

// 
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

// prduct file save
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
