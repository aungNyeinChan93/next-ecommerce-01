import { authClient } from "@/lib/auth-client";



export async function getClientSession() {
    const { data, error, isPending } = authClient.useSession();
    // const authUser = data && await prisma?.user?.findUnique({
    //     where:
    //         { id: data?.user?.id },
    //     include: { accounts: true, sessions: true }
    // });
    return data;
};