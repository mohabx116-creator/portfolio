function ButtonLink({ href, children, variant = 'primary', target, rel, className = '', onClick }) {
  const variants = {
    primary:
      'bg-berry-button text-white shadow-[0_18px_48px_rgba(var(--color-primary-container),0.28)] hover:brightness-110 hover:shadow-[0_20px_56px_rgba(var(--color-primary-container),0.34)]',
    ghost: 'bg-surface-card/80 text-primary hover:bg-surface-high hover:text-on-surface',
    subtle: 'text-primary hover:bg-surface-high/70',
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-headline text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </a>
  )
}

export default ButtonLink
