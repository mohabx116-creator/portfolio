function Container({ children, className = '' }) {
  return <div className={`section-shell w-full ${className}`.trim()}>{children}</div>
}

export default Container
