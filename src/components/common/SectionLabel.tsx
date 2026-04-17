import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A84C]',
        className
      )}
    >
      <span className="h-px w-6 bg-[#C9A84C]" />
      {children}
    </span>
  )
}
