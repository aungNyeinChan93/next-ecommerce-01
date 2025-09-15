import { z } from 'zod'


export type RegisterType = z.infer<typeof RegisterSchema>
export const RegisterSchema = z.object({
    name: z.string().min(1, 'name fields is required'),
    email: z.string().email('invalid email').min(1, 'email field is required'),
    password: z.string().min(1, 'password field is required')
});

export const LoginSchema = z.object({
    email: z.string().email('invalid email').min(1, 'email field is required'),
    password: z.string().min(1, 'password field is required')
})