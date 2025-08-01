import z from 'zod'

export const LoginSchema = z.object({
  email: z.email('Email is required'),
  password: z.string().min(1, 'Password is required'),
})

export const RegisterSchema = z.object({
  email: z.email('Email is required'),
  password: z.string().min(6, 'Minimum 6 characters required'),
  name: z.string().min(1, 'Name is required'),
})
