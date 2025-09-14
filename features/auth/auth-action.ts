'use server'

import { auth } from "@/lib/auth";
import { RegisterSchema } from "@/lib/zod-schema/auth-schema";

export async function registerAction(initialState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const { success, data: fields, error } = await RegisterSchema.safeParseAsync({ name, email, password })
    if (!success) {
        return {
            success, errors: {
                name: error.format().name?._errors[0],
                email: error.format().email?._errors[0],
                password: error.format().password?._errors[0],
            }
        }
    };
    try {
        const { user } = await auth.api.signUpEmail({
            body: { ...fields, callbackURL: '/login' },
        });
        if (!user) {
            return {
                success: false, errors: {
                    other: 'register fail'
                }
            }
        };
        return { success: true, message: 'register success' }
    } catch (error) {
        return {
            success: false, errors: {
                other: error instanceof Error ? error?.message : 'register fail'
            }
        }
    }
}