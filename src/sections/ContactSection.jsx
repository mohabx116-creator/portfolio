import { useState } from 'react'
import ContactCard from '../components/ContactCard'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useAppSettings from '../context/useAppSettings'

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
}

function validateForm(values, labels) {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (values.name.trim().length < 2) errors.name = labels.name
  if (!emailPattern.test(values.email.trim())) errors.email = labels.email
  if (!values.projectType) errors.projectType = labels.projectType
  if (!values.budget) errors.budget = labels.budget
  if (values.message.trim().length < 10) errors.message = labels.message

  return errors
}

function ContactSection() {
  const { content } = useAppSettings()
  const contactSection = content?.sections?.contact || {}
  const contacts = Array.isArray(content?.contacts) ? content.contacts : []
  const projectTypes = Array.isArray(contactSection.projectTypes) ? contactSection.projectTypes : []
  const budgets = Array.isArray(contactSection.budgets) ? contactSection.budgets : []
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm(form, contactSection.errors || {})
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      return
    }

    const subject = encodeURIComponent(`Portfolio project inquiry - ${form.projectType}`)
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
      `Budget: ${form.budget}`,
      '',
      'Message:',
      form.message,
    ].join('\n'))

    setStatus(contactSection.success || 'Message ready.')
    window.location.href = `mailto:${content.contactData.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-surface-low px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-14 xl:gap-16">
          <Reveal className="text-start">
            <SectionHeading
              eyebrow={contactSection.eyebrow}
              title={contactSection.title}
              description={contactSection.description}
              className="max-w-2xl"
              titleClassName="text-[2.1rem] leading-[1.08] sm:text-[2.7rem] lg:text-[3.35rem]"
              descriptionClassName="mt-5 max-w-xl text-[1rem] leading-8 sm:text-[1.08rem] sm:leading-9"
            />

            <div className="mt-8 rounded-[1.9rem] border border-primary/18 bg-gradient-to-br from-primary/10 via-surface-card/65 to-secondary/10 p-6 shadow-[0_20px_50px_rgba(128,131,255,0.1)] backdrop-blur-sm sm:mt-10 sm:p-7">
              <p className="font-headline text-lg font-bold text-primary">{contactSection.highlightTitle}</p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-on-muted sm:text-base sm:leading-8">{contactSection.highlightCopy}</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contacts.slice(0, 4).map((item, index) => (
                <ContactCard
                  key={item.label || index}
                  {...item}
                  featured={item.label === 'UpWork'}
                  badge={item.label === 'UpWork' ? 'Primary' : undefined}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={handleSubmit} noValidate className="dashboard-card ghost-border rounded-[2rem] p-5 text-start sm:p-7 lg:p-8">
              <div>
                <p className="font-headline text-2xl font-bold text-on-surface">{contactSection.formTitle}</p>
                <p className="mt-2 text-sm leading-7 text-on-muted">{contactSection.formSubtitle}</p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-on-surface">{contactSection.name}</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="min-h-12 rounded-2xl border border-outline-variant/20 bg-surface-high px-4 text-sm text-on-surface outline-none transition focus:border-primary/45 focus:ring-2 focus:ring-primary/15"
                  />
                  {errors.name ? <span className="text-xs font-semibold text-primary">{errors.name}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-on-surface">{contactSection.email}</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="min-h-12 rounded-2xl border border-outline-variant/20 bg-surface-high px-4 text-sm text-on-surface outline-none transition focus:border-primary/45 focus:ring-2 focus:ring-primary/15"
                  />
                  {errors.email ? <span className="text-xs font-semibold text-primary">{errors.email}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-on-surface">{contactSection.projectType}</span>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="min-h-12 rounded-2xl border border-outline-variant/20 bg-surface-high px-4 text-sm text-on-surface outline-none transition focus:border-primary/45 focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="">{contactSection.projectType}</option>
                    {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                  {errors.projectType ? <span className="text-xs font-semibold text-primary">{errors.projectType}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-on-surface">{contactSection.budget}</span>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="min-h-12 rounded-2xl border border-outline-variant/20 bg-surface-high px-4 text-sm text-on-surface outline-none transition focus:border-primary/45 focus:ring-2 focus:ring-primary/15"
                  >
                    <option value="">{contactSection.budget}</option>
                    {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                  </select>
                  {errors.budget ? <span className="text-xs font-semibold text-primary">{errors.budget}</span> : null}
                </label>
              </div>

              <label className="mt-4 grid gap-2">
                <span className="text-sm font-bold text-on-surface">{contactSection.message}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="resize-none rounded-2xl border border-outline-variant/20 bg-surface-high px-4 py-3 text-sm leading-7 text-on-surface outline-none transition focus:border-primary/45 focus:ring-2 focus:ring-primary/15"
                />
                {errors.message ? <span className="text-xs font-semibold text-primary">{errors.message}</span> : null}
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-primary/65 bg-berry-button px-6 py-3 font-headline text-sm font-bold text-white shadow-[0_20px_54px_rgba(var(--color-primary-container),0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                {contactSection.submit}
              </button>

              {status ? <p className="mt-4 text-sm font-semibold text-primary">{status}</p> : null}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
