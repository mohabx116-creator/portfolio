import {
  BriefcaseBusiness,
  Code2,
  Globe2,
  Mail,
  MessageCircle,
  Store,
} from 'lucide-react'

const iconMap = {
  whatsapp: MessageCircle,
  email: Mail,
  linkedin: Globe2,
  freelancer: BriefcaseBusiness,
  github: Code2,
  marketplace: Store,
}

function ContactCard({ label, href, cta, icon, featured = false, badge }) {
  const Icon = iconMap[icon] || Code2

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`dashboard-card group flex h-full min-w-0 flex-col justify-between gap-6 rounded-[1.8rem] p-5 text-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_54px_rgba(0,0,0,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-low sm:p-6 ${
        featured
          ? 'border border-primary/25 bg-gradient-to-br from-primary/10 via-surface-card to-secondary/10 hover:border-primary/40 hover:shadow-[0_24px_56px_rgba(128,131,255,0.2)]'
          : 'ghost-border bg-surface-card/92 hover:border-primary/25 hover:bg-surface-card'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${featured ? 'border-primary/25 bg-primary/10 text-primary' : 'border-outline-variant/15 bg-surface-high/80 text-on-surface'} transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:text-primary`}>
            <Icon size={19} strokeWidth={1.9} />
          </div>
          <div className="min-w-0">
            <p className="font-label text-xs uppercase tracking-[0.24em] text-primary">{label}</p>
          </div>
        </div>
        {badge ? (
          <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-outline-variant/12 pt-4">
        <span className="text-sm font-medium text-on-muted transition-colors duration-300 group-hover:text-primary">
          {cta}
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/15 bg-surface-high/80 text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-primary/25">
          ↗
        </span>
      </div>
    </a>
  )
}

export default ContactCard
