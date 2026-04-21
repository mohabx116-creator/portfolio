const editorLines = [
  { width: '72%', tone: 'bg-primary/18' },
  { width: '58%', tone: 'bg-on-surface/18' },
  { width: '81%', tone: 'bg-secondary/18' },
  { width: '64%', tone: 'bg-on-surface/16' },
  { width: '88%', tone: 'bg-primary/14' },
  { width: '52%', tone: 'bg-tertiary/16' },
  { width: '78%', tone: 'bg-secondary/16' },
]

const chartHeights = ['26%', '42%', '34%', '58%', '48%', '68%', '44%']
const tokenWidths = ['100%', '78%', '62%']
const fileTree = ['app', 'routes', 'components', 'sections', 'ui', 'tokens']

function ProjectsBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(var(--color-surface),0.74),rgba(var(--color-surface-dim),0.88)_42%,rgba(var(--color-surface-low),0.96))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--color-primary-container),0.08),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(var(--color-secondary),0.06),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(var(--color-tertiary),0.04),transparent_24%)]" />

      <div
        className="absolute inset-0 opacity-28"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--color-outline-variant), 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--color-outline-variant), 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(180deg, transparent, black 14%, black 86%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, black 14%, black 86%, transparent)',
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

      <div className="absolute left-[-8rem] top-16 hidden h-80 w-80 rounded-full bg-primary/8 blur-3xl lg:block" />
      <div className="absolute bottom-[-8rem] right-[-4rem] hidden h-96 w-96 rounded-full bg-secondary/7 blur-3xl lg:block" />

      <div className="absolute left-[-2rem] top-24 hidden w-[40rem] -rotate-[4deg] rounded-[2rem] border border-outline-variant/30 bg-surface-card/46 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-[10px] lg:block xl:w-[44rem]">
        <div className="flex items-center justify-between rounded-[1.35rem] border border-white/5 bg-surface/78 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/55" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary/45" />
              <span className="h-2.5 w-2.5 rounded-full bg-tertiary/55" />
            </div>
            <div className="hidden items-center gap-2 xl:flex">
              {['src', 'router', 'dashboard-shell'].map((tab) => (
                <span key={tab} className="rounded-full border border-outline-variant/15 bg-surface-card/88 px-3 py-1 font-mono text-[10px] text-on-muted/75">
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <div className="h-8 w-28 rounded-full border border-outline-variant/15 bg-surface-card/84" />
        </div>

        <div className="mt-4 grid grid-cols-[11rem_1fr] gap-4 xl:grid-cols-[12rem_1fr]">
          <div className="rounded-[1.45rem] border border-white/5 bg-surface/72 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/70">workspace</span>
              <span className="h-7 w-7 rounded-xl bg-primary/10" />
            </div>
            <div className="mt-5 space-y-3">
              {fileTree.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${index % 2 === 0 ? 'bg-primary/25' : 'bg-secondary/22'}`} />
                  <span className="font-mono text-[10px] text-on-muted/72">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[1rem] border border-outline-variant/15 bg-surface-card/84 p-3">
              <div className="h-3 w-16 rounded-full bg-tertiary/18" />
              <div className="mt-4 space-y-2">
                {tokenWidths.map((width) => (
                  <div key={width} className="h-2 rounded-full bg-on-surface/14" style={{ width }} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.45rem] border border-white/5 bg-surface/72 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/72">editor.tsx</span>
                  <div className="mt-2 h-3 w-28 rounded-full bg-on-surface/12" />
                </div>
                <div className="flex gap-2">
                  <span className="h-7 w-10 rounded-lg bg-surface-card/88" />
                  <span className="h-7 w-7 rounded-lg bg-primary/12" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_13rem] gap-4">
                <div className="rounded-[1.15rem] border border-outline-variant/15 bg-surface-card/84 p-4">
                  <div className="space-y-3">
                    {editorLines.map((line, index) => (
                      <div key={`${line.width}-${index}`} className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-on-muted/44">{index + 1}</span>
                        <span className={`h-2 rounded-full ${line.tone}`} style={{ width: line.width }} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.15rem] border border-outline-variant/15 bg-surface-card/84 p-3">
                  <div className="h-3 w-16 rounded-full bg-secondary/18" />
                  <div className="mt-4 rounded-[0.95rem] border border-outline-variant/15 bg-surface/88 p-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-14 rounded-xl bg-primary/10" />
                      <div className="h-14 rounded-xl bg-surface-high/95" />
                    </div>
                    <div className="mt-3 h-16 rounded-xl border border-white/5 bg-[linear-gradient(135deg,rgba(var(--color-primary-container),0.14),rgba(var(--color-surface-low),0.32))]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1.05fr_0.95fr] gap-4">
              <div className="rounded-[1.35rem] border border-white/5 bg-surface/72 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/70">preview</span>
                  <span className="h-7 w-14 rounded-full bg-primary/12" />
                </div>
                <div className="mt-4 rounded-[1rem] border border-outline-variant/15 bg-surface-card/84 p-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/45" />
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-tertiary/45" />
                  </div>
                  <div className="mt-4 h-20 rounded-[0.95rem] border border-white/5 bg-surface/88" />
                </div>
              </div>

              <div className="rounded-[1.35rem] border border-white/5 bg-surface/72 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-tertiary/70">tokens</span>
                  <span className="h-7 w-7 rounded-xl bg-tertiary/12" />
                </div>
                <div className="mt-4 space-y-3">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="rounded-[0.95rem] border border-outline-variant/15 bg-surface-card/82 p-3">
                      <div className="h-2 w-16 rounded-full bg-on-surface/18" />
                      <div className="mt-3 h-7 w-full rounded-lg bg-surface-high/90" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-2rem] top-24 hidden w-[30rem] rotate-[5deg] rounded-[2rem] border border-outline-variant/28 bg-surface-card/42 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur-[10px] lg:block xl:w-[34rem]">
        <div className="flex items-center justify-between rounded-[1.35rem] border border-white/5 bg-surface/78 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/55" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary/45" />
              <span className="h-2.5 w-2.5 rounded-full bg-tertiary/55" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-on-muted/68">metrics-panel</span>
          </div>
          <span className="h-8 w-16 rounded-full bg-primary/12" />
        </div>

        <div className="mt-4 rounded-[1.55rem] border border-white/5 bg-surface/72 p-5">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-[1rem] border border-outline-variant/15 bg-surface-card/84 p-3">
                <div className="h-3 w-12 rounded-full bg-primary/18" />
                <div className="mt-4 h-7 w-14 rounded-full bg-on-surface/14" />
                <div className="mt-3 h-2 w-full rounded-full bg-surface-high/90" />
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div className="rounded-[1.2rem] border border-outline-variant/15 bg-surface-card/84 p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/70">dashboard</span>
                <span className="h-7 w-7 rounded-xl bg-primary/12" />
              </div>
              <div className="mt-5 flex h-32 items-end gap-2">
                {chartHeights.map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className={`flex-1 rounded-t-full ${index > 4 ? 'bg-gradient-to-t from-tertiary/14 to-primary/22' : 'bg-gradient-to-t from-secondary/14 to-primary/22'}`}
                    style={{ height }}
                  />
                ))}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-outline-variant/25 to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.2rem] border border-outline-variant/15 bg-surface-card/84 p-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/70">props</span>
                <div className="mt-4 space-y-3">
                  {['size', 'variant', 'state'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-[0.9rem] border border-white/5 bg-surface/88 px-3 py-2.5">
                      <span className="font-mono text-[10px] text-on-muted/74">{item}</span>
                      <span className="h-5 w-10 rounded-full bg-primary/12" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-outline-variant/15 bg-surface-card/84 p-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/70">responsive</span>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="rounded-[0.9rem] border border-white/5 bg-surface/88 p-2">
                      <div className="h-10 rounded-lg bg-surface-high/90" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 hidden w-[28rem] -translate-x-1/2 rounded-[1.85rem] border border-outline-variant/28 bg-surface-card/40 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-[8px] xl:block">
      <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/72">component-system</span>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-tertiary/40" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-[1.15rem] border border-white/5 bg-surface/72 p-4">
              <div className="h-8 w-8 rounded-xl bg-primary/10" />
              <div className="mt-4 space-y-2.5">
                {tokenWidths.map((width) => (
                  <div key={`${width}-${item}`} className="h-2 rounded-full bg-on-surface/16" style={{ width }} />
                ))}
              </div>
              <div className="mt-4 h-16 rounded-[0.95rem] border border-outline-variant/15 bg-surface-card/84" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsBackdrop
