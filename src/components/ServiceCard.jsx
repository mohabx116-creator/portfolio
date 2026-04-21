const icons = {
  sparkles: <path d="m12 3 1.7 4.4L18 9l-4.3 1.6L12 15l-1.7-4.4L6 9l4.3-1.6L12 3Zm7 10 1 2.2 2.3.8-2.3.8L19 19l-1-2.2-2.3-.8 2.3-.8L19 13ZM5 14l1 2.2 2.3.8-2.3.8L5 20l-1-2.2-2.3-.8 2.3-.8L5 14Z" />,
  devices: <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5V13a2 2 0 0 1-2 2h-4v2h2m-8 0h8M8.5 19H10m-4-3h2a2 2 0 0 0 2-2V8.5A1.5 1.5 0 0 0 10.5 7h-3A1.5 1.5 0 0 0 6 8.5V16Z" />,
  rocket: <path d="M14 4c3.4 0 6 2.6 6 6-3 2-5.4 2.6-8.4 2.6L9 15l-2 2-1-4 2-2 2.6-2.6C11.4 5.5 12 4 14 4Zm-5 11-2 2m8-9 2 2" />,
  plug: <path d="M9 7v4m6-4v4m-8 0h10m-8 0v2a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3v-2m-3 5v5" />,
  dashboard: <path d="M4 4h7v7H4V4Zm9 0h7v4h-7V4ZM13 10h7v10h-7V10ZM4 13h7v7H4v-7Z" />,
  spark: <path d="m12 3 1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4L12 3Zm7 11 1 2.5L22.5 17 20 17.5 19 20l-1-2.5L15.5 17 18 16.5 19 14ZM5 14l1 2.5L8.5 17 6 17.5 5 20l-1-2.5L1.5 17 4 16.5 5 14Z" />,
}

function ServiceCard({ title, description, icon }) {
  return (
    <article className="dashboard-card ghost-border group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-high/80 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)] sm:p-6 lg:p-7">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 sm:mb-6 sm:h-12 sm:w-12">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
          {icons[icon]}
        </svg>
      </div>
      <h3 className="headline-gradient relative font-headline text-lg font-bold leading-7 sm:text-xl">{title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-on-muted">{description}</p>
    </article>
  )
}

export default ServiceCard
