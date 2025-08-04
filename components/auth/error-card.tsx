import { CardWrapper } from '@/components/auth/card-wrapper'

import { TriangleAlert } from 'lucide-react'

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong!'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <div className='flex justify-center items-center w-full'>
        <TriangleAlert className='text-destructive' />
      </div>
    </CardWrapper>
  )
}

export default ErrorCard
