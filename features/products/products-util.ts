


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