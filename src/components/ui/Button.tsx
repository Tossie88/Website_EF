import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'white'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-sans font-medium tracking-[0.08em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-gold text-midnight hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] active:scale-[0.98]',
    ghost:
      'border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold active:scale-[0.98]',
    white:
      'bg-cream text-midnight hover:bg-cream/90 active:scale-[0.98]',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
