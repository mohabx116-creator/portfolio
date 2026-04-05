import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Application runtime error:', error, info)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-surface px-4 py-12 text-on-surface sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
            <div className="dashboard-card ghost-border w-full rounded-[2rem] p-8 text-center shadow-[0_24px_64px_rgba(0,0,0,0.16)] sm:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/12 text-3xl text-primary">
                !
              </div>
              <p className="section-kicker mt-6">Runtime Error</p>
              <h1 className="mt-3 font-headline text-3xl font-bold tracking-[-0.02em] text-on-surface sm:text-4xl">
                ??? ??? ??? ????? ????? ????? ??????
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-on-muted sm:text-lg">
                ?? ??? ???? ???? ????? ???????. ????? ????? ????? ?????? ????? ???? ?????? ??????? ??????? ???? ????? ???? ?? ?????? ??? ?????? ?? ?????? ????????.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={this.handleReload}
                  className="inline-flex items-center justify-center rounded-xl bg-berry-button px-7 py-3.5 font-headline text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  ????? ????? ??????
                </button>
                <a
                  href="https://wa.me/201027613133"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-surface-high px-7 py-3.5 font-headline text-base font-bold text-on-surface transition-all duration-300 hover:-translate-y-0.5 hover:text-primary"
                >
                  ????? ??? ??????
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
