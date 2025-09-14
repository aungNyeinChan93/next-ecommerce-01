import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from '@/lib/prisma-client'
import { nextCookies } from "better-auth/next-js";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    plugins: [nextCookies()],
    user: {
        additionalFields: {
            role: {
                type: 'string',
                input: false,
                defaultValue: 'user'
            }
        }
    }
});