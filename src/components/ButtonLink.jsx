function ButtonLink({ href, children, variant = 'primary', target, rel, className = '', onClick }) {
  const variants = {
    primary:
      'border border-primary/65 bg-berry-button text-white shadow-[0_20px_54px_rgba(var(--color-primary-container),0.34)] hover:scale-[1.015] hover:brightness-110 hover:shadow-[0_24px_62px_rgba(var(--color-primary-container),0.42)]',
    ghost:
      'border border-white/18 bg-white/[0.02] text-white hover:scale-[1.01] hover:border-white/60 hover:bg-white hover:text-surface',
    subtle: 'text-primary hover:bg-primary/10',
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center font-headline text-sm font-bold leading-5 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:px-6 ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </a>
  )
}

export default ButtonLink
