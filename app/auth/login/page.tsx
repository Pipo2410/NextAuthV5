import React, { Suspense } from 'react'
import { LoginForm } from '@/components/auth/login-form'
import { Skeleton } from '@/components/ui/skeleton'
const LoginPage = () => {
  return (
    <Suspense
      fallback={<Skeleton className='h-[464px] w-[400px] rounded-xl' />}
    >
      <LoginForm />
    </Suspense>
  )
}

export default LoginPage
