'use server'

import { auth } from "@/lib/auth";
import { LoginSchema, RegisterSchema } from "@/lib/zod-schema/auth-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

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
        revalidatePath('/')
        return { success: true, message: 'register success' }
    } catch (error) {
        return {
            success: false, errors: {
                other: error instanceof Error ? error?.message : 'register fail'
            }
        }
    }
}


export async function loginAction(initialState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { success, data: fields, error } = await LoginSchema.safeParseAsync({ email, password })
    if (!success) {
        return {
            success, errors: {
                email: error.format().email?._errors[0],
                password: error.format().password?._errors[0],
            }
        }
    };
    try {
        const { url } = await auth.api.signInEmail({
            body: { ...fields, callbackURL: '/' },
        });
        if (!url) {
            return {
                success: false, errors: {
                    other: 'login fail'
                }
            }
        };

        return { success: true, message: 'login success', url }
    } catch (error) {
        return {
            success: false, errors: {
                other: error instanceof Error ? error?.message : 'login fail'
            }
        }
    }
}


export async function logout() {
    const { success } = await auth.api.signOut({ headers: await headers() })
    if (!success) return;
    revalidatePath('/')
    return redirect('/login', RedirectType.replace)
}