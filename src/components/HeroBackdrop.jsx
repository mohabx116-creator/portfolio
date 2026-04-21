const editorLines = [
  { width: '74%', tone: 'bg-primary/20' },
  { width: '52%', tone: 'bg-on-surface/16' },
  { width: '88%', tone: 'bg-secondary/18' },
  { width: '61%', tone: 'bg-on-surface/14' },
  { width: '82%', tone: 'bg-primary/16' },
  { width: '46%', tone: 'bg-tertiary/18' },
]

const chartBars = ['34%', '52%', '47%', '68%', '58%', '74%']
const tokenRows = ['100%', '78%', '56%']
const previewCards = ['routes', 'ui-shell', 'metrics', 'responsive']

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(var(--color-surface), 0.8), rgba(var(--color-surface-dim), 0.92) 32%, rgba(var(--color-surface-low), 0.98) 100%),
            radial-gradient(circle at 18% 18%, rgba(var(--color-primary-container), 0.26), transparent 22%),
            radial-gradient(circle at 68% 38%, rgba(var(--color-secondary-container), 0.18), transparent 24%),
            radial-gradient(circle at 84% 22%, rgba(var(--color-primary), 0.1), transparent 18%),
            radial-gradient(circle at 50% 86%, rgba(var(--color-tertiary), 0.08), transparent 22%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--color-outline-variant), 0.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--color-outline-variant), 0.11) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(180deg, transparent, black 14%, black 82%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, black 14%, black 82%, transparent)',
        }}
      />

      <div
        className="absolute inset-0 opacity-16"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(var(--color-outline-variant), 0.12) 1px, transparent 1px)',
          backgroundSize: '8.333% 100%',
          maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}
      />

      <div className="hero-backdrop-noise absolute inset-0 opacity-[0.08] mix-blend-screen" />

      <div className="hero-backdrop-beam absolute left-[-8%] top-[13%] h-28 w-[48%] rounded-full bg-primary/18 blur-[96px] sm:w-[42%]" />
      <div className="hero-backdrop-beam-alt absolute left-[12%] top-[33%] h-px w-[62%] bg-gradient-to-r from-transparent via-secondary/85 to-transparent blur-[0.6px]" />
      <div className="hero-backdrop-beam absolute left-[6%] top-[68%] h-px w-[72%] bg-gradient-to-r from-transparent via-primary/80 to-transparent blur-[0.8px]" />
      <div className="hero-backdrop-beam-alt absolute right-[-6%] top-[54%] h-24 w-[34%] rounded-full bg-secondary/14 blur-[82px]" />

      <div className="absolute left-[6%] top-[18%] h-40 w-40 rounded-full bg-primary/10 blur-[110px] sm:h-56 sm:w-56" />
      <div className="absolute right-[12%] top-[12%] h-28 w-28 rounded-full bg-secondary/10 blur-[80px] sm:h-40 sm:w-40" />
      <div className="absolute bottom-[14%] left-[36%] h-24 w-24 rounded-full bg-tertiary/10 blur-[90px] sm:h-36 sm:w-36" />

      <div className="hero-backdrop-float absolute right-[-2.5rem] top-24 md:hidden">
        <div className="w-48 rotate-[8deg] rounded-[1.6rem] border border-outline-variant/15 bg-surface-card/26 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.16)] backdrop-blur-[10px]">
          <div className="rounded-[1.2rem] border border-white/5 bg-surface/70 p-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary/55" />
              <span className="h-2 w-2 rounded-full bg-secondary/45" />
              <span className="h-2 w-2 rounded-full bg-tertiary/55" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-12 rounded-xl bg-primary/12" />
              <div className="h-12 rounded-xl bg-surface-card/88" />
            </div>
            <div className="mt-3 h-16 rounded-[0.95rem] border border-white/5 bg-surface-card/82" />
          </div>
        </div>
      </div>

      <div className="hero-backdrop-float-alt absolute right-[-4rem] top-24 hidden md:block lg:right-[-2rem]">
        <div className="w-[21rem] rotate-[7deg] rounded-[2rem] border border-outline-variant/15 bg-surface-card/24 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.18)] backdrop-blur-[12px] lg:w-[25rem] xl:w-[28rem]">
          <div className="rounded-[1.35rem] border border-white/5 bg-surface/74 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary/45" />
                  <span className="h-2.5 w-2.5 rounded-full bg-tertiary/55" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-on-muted/68">product-workspace</span>
              </div>
              <span className="h-8 w-16 rounded-full bg-primary/12" />
            </div>

            <div className="mt-4 grid grid-cols-[9rem_1fr] gap-4 lg:grid-cols-[10rem_1fr]">
              <div className="rounded-[1.15rem] border border-white/5 bg-surface-card/82 p-3">
                <div className="h-3 w-16 rounded-full bg-primary/18" />
                <div className="mt-4 space-y-2.5">
                  {previewCards.map((item, index) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? 'bg-primary/28' : 'bg-secondary/24'}`} />
                      <span className="font-mono text-[10px] text-on-muted/70">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[0.95rem] border border-outline-variant/15 bg-surface/88 p-3">
                  <div className="h-3 w-12 rounded-full bg-secondary/18" />
                  <div className="mt-3 space-y-2">
                    {tokenRows.map((width) => (
                      <div key={width} className="h-2 rounded-full bg-on-surface/14" style={{ width }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.15rem] border border-white/5 bg-surface-card/82 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/74">dashboard.tsx</span>
                      <div className="mt-2 h-3 w-28 rounded-full bg-on-surface/14" />
                    </div>
                    <div className="flex gap-2">
                      <span className="h-7 w-10 rounded-lg bg-surface/82" />
                      <span className="h-7 w-7 rounded-lg bg-primary/12" />
                    </div>
                  </div>

                  <div className="mt-4 rounded-[0.95rem] border border-outline-variant/15 bg-surface/88 p-3">
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((item) => (
                        <div key={item} className="rounded-[0.8rem] border border-white/5 bg-surface-card/82 p-2.5">
                          <div className="h-2 w-10 rounded-full bg-primary/18" />
                          <div className="mt-3 h-6 w-14 rounded-full bg-on-surface/12" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex h-24 items-end gap-2">
                      {chartBars.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className={`flex-1 rounded-t-full ${index > 3 ? 'bg-gradient-to-t from-tertiary/16 to-primary/24' : 'bg-gradient-to-t from-secondary/14 to-primary/24'}`}
                          style={{ height }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[1.1fr_0.9fr] gap-3">
                  <div className="rounded-[1.1rem] border border-white/5 bg-surface-card/82 p-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/70">preview</span>
                    <div className="mt-3 h-20 rounded-[0.95rem] border border-outline-variant/15 bg-[linear-gradient(135deg,rgba(var(--color-primary-container),0.18),rgba(var(--color-surface-low),0.38))]" />
                  </div>
                  <div className="rounded-[1.1rem] border border-white/5 bg-surface-card/82 p-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-tertiary/70">props</span>
                    <div className="mt-3 space-y-2.5">
                      {['size', 'state'].map((item) => (
                        <div key={item} className="flex items-center justify-between rounded-[0.8rem] border border-white/5 bg-surface/88 px-3 py-2">
                          <span className="font-mono text-[10px] text-on-muted/72">{item}</span>
                          <span className="h-5 w-8 rounded-full bg-primary/12" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-backdrop-float absolute left-[-8rem] bottom-14 hidden lg:block">
        <div className="w-[23rem] -rotate-[8deg] rounded-[2rem] border border-outline-variant/15 bg-surface-card/18 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-[10px]">
          <div className="rounded-[1.35rem] border border-white/5 bg-surface/74 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/72">component-system.tsx</span>
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/45" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-tertiary/45" />
              </div>
            </div>

            <div className="mt-4 rounded-[1rem] border border-outline-variant/15 bg-surface-card/84 p-4">
              <div className="space-y-3">
                {editorLines.map((line, index) => (
                  <div key={`${line.width}-${index}`} className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-on-muted/42">{index + 1}</span>
                    <span className={`h-2 rounded-full ${line.tone}`} style={{ width: line.width }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[0, 1].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/5 bg-surface-card/84 p-3">
                  <div className="h-3 w-14 rounded-full bg-on-surface/14" />
                  <div className="mt-3 h-10 rounded-[0.9rem] bg-surface/88" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-backdrop-float-slow absolute bottom-[11%] right-[4%] hidden lg:block">
        <div className="w-[17rem] rotate-[4deg] rounded-[1.8rem] border border-outline-variant/15 bg-surface-card/18 p-3 shadow-[0_20px_56px_rgba(0,0,0,0.16)] backdrop-blur-[10px] xl:w-[19rem]">
          <div className="rounded-[1.2rem] border border-white/5 bg-surface/72 p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/72">browser-preview</span>
              <span className="h-7 w-12 rounded-full bg-primary/12" />
            </div>
            <div className="mt-3 rounded-[0.95rem] border border-outline-variant/15 bg-surface-card/84 p-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/45" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-tertiary/45" />
              </div>
              <div className="mt-3 h-20 rounded-[0.95rem] border border-white/5 bg-surface/88" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-11 rounded-xl bg-primary/12" />
                <div className="h-11 rounded-xl bg-surface/88" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {[0, 1, 2, 3, 4, 5].map((item) => (
        <span
          key={item}
          className="hero-backdrop-spark absolute h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_16px_rgba(var(--color-primary-container),0.48)]"
          style={{
            top: `${18 + item * 11}%`,
            left: `${58 + (item % 3) * 11}%`,
            animationDelay: `${item * 0.8}s`,
          }}
        />
      ))}
    </div>
  )
}

export default HeroBackdrop
