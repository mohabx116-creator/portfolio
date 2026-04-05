function SectionHeading({ eyebrow, title, description, align = 'start', className = '', titleClassName = '', descriptionClassName = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-start'

  return (
    <div className={`max-w-3xl ${alignment} ${className}`.trim()}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className={`section-title mt-3 ${titleClassName}`.trim()}>{title}</h2>
      <p className={`section-copy mt-4 ${descriptionClassName}`.trim()}>{description}</p>
    </div>
  )
}

export default SectionHeading
