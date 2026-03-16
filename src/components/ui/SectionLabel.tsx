interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <span
      className={`block text-xs font-sans font-medium tracking-[0.3em] uppercase mb-4 ${
        light ? 'text-cream/50' : 'text-gold'
      } ${className}`}
    >
      {children}
    </span>
  )
}
