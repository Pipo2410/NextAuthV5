'use client'

import { FcGoogle } from 'react-icons/fc'
import { Button } from '../ui/button'
import { FaGithub } from 'react-icons/fa'

export const Social = () => {
  return (
    <div className='flex w-full gap-x-2'>
      <Button size='lg' variant='outline' className='flex-1' onClick={() => {}}>
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button size='lg' variant='outline' className='flex-1' onClick={() => {}}>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  )
}
