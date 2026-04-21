function ButtonLink({ href, children, variant = 'primary', target, rel, className = '', onClick }) {
  const variants = {
    primary:
      'border border-primary/65 bg-berry-button text-white shadow-[0_20px_54px_rgba(var(--color-primary-container),0.34)] hover:scale-[1.015] hover:brightness-110 hover:shadow-[0_24px_62px_rgba(var(--color-primary-container),0.42)]',
    ghost:
      'border border-outline-variant/70 bg-white/95 text-on-surface ring-1 ring-primary/10 shadow-[0_10px_30px_rgba(15,23,42,0.08),0_0_18px_rgba(255,45,45,0.10)] hover:scale-[1.01] hover:border-primary/30 hover:ring-primary/20 hover:bg-white hover:text-on-surface hover:shadow-[0_14px_34px_rgba(15,23,42,0.10),0_0_28px_rgba(255,45,45,0.16)]',
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
