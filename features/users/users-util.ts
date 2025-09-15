import { Prisma } from "@/server/generated/prisma";


export type User = Prisma.UserGetPayload<{
    include: { orders: true }
}>;

// get users
export const getUserData = async () => {
    const [usersCount, users] = await Promise.all([prisma?.user?.count(), prisma?.user.findMany({
        include: { orders: true }
    })])
    return { users, usersCount };
}