import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#CC7B08] from-28% via-[#E14775] via-70% to-[#7058BE] sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[#CC7B08] from-28% via-[#E14775] via-70% to-[#7058BE]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
