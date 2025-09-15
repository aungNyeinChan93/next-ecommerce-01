import { prisma } from "@/lib/prisma-client"

// totla sale
export async function getTotalSales() {
    const totalSales = await prisma?.order.aggregate({
        _sum: { price: true },
        _count: true
    })
    return {
        amount: totalSales?._sum.price || 0,
        numberOfSales: totalSales?._count
    };
}