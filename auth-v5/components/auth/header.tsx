import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

interface HeaderProps {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-y-4 items-center justify-center ',
        font.className
      )}
    >
      <h1 className={cn('text-3xl font-semibold', font.className)}>🔐 Auth</h1>
      <p className='text-sm text-muted-foreground'>{label}</p>
    </div>
  )
}
