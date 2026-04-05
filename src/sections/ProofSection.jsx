import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { proofCards } from '../data/content'

function ProofSection() {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <Reveal>
          <div className="glass-panel p-6 sm:p-8">
            <SectionHeading
              eyebrow="عناصر الثقة"
              title="ما الذي يجعل هذا الأسلوب مناسبًا للعملاء الجادين؟"
              description="الهدف ليس فقط مظهر جميل، بل تجربة تنفيذ تشعرك أن مشروعك في يد شخص يهتم بالنتيجة النهائية فعلًا."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {proofCards.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/25">
                  <p className="text-lg font-bold text-white">{item.title}</p>
                  <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default ProofSection
