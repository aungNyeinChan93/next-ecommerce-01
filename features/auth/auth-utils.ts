import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { cache } from 'react'
import 'server-only'


export type ServerSession = typeof auth.$Infer.Session;
export const getServerSession = cache(async () => {
    const session = await auth.api.getSession({ headers: await headers() })
    return session;
});


export const getAuthUser = async () => {
    const session = await auth.api.getSession({ headers: await headers() })
    const authUser = session && await prisma?.user?.findUnique({
        where:
            { id: session?.user?.id },
        include: { accounts: true, sessions: true }
    });
    return authUser
}