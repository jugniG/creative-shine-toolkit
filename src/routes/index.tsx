import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  ShieldCheck,
  CircleDollarSign,
  TriangleAlert,
  Hourglass,
  Sunrise,
  MoonStar,
  Lock,
  Smartphone,
  XCircle,
  BadgeCheck,
} from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Screenly — Make your day longer by cutting screentime" },
      {
        name: "description",
        content:
          "Screenly locks the apps that distract you and backs your focus goals with real financial stakes. Open source, science-backed screentime control.",
      },
      { property: "og:title", content: "Screenly — Make your day longer" },
      {
        property: "og:description",
        content: "Lock distracting apps, stake your money, and win your hours back.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: ShieldCheck, title: "Lock apps", sub: "that distract you" },
  { icon: CircleDollarSign, title: "Stake to lock", sub: "your screentime" },
  { icon: TriangleAlert, title: "Real consequences", sub: "lose money if you slip" },
  { icon: Github, title: "Open source", sub: "audit every line of code" },
];

const storyBeats = [
  {
    n: "01",
    title: "The best revolution, gone sideways",
    body: "Mobiles are the best tech revolution in the history of humankind. But somewhere along the way, they became the biggest thieves of our time.",
  },
  {
    n: "02",
    title: "The 8am promise",
    body: "Every morning, you have good intentions. You know exactly what you'd rather do with your evening, and you mean it.",
  },
  {
    n: "03",
    title: "Then 9pm happens",
    body: "A plan made at 8am has to survive 9pm, when you're tired and nothing is at stake. That isn't a character flaw — it's a design problem: there's no reason for tonight's you to keep the morning's promise.",
  },
  {
    n: "04",
    title: "The instinct we can use",
    body: "Psychologists have found that losing something feels roughly twice as strong as gaining the same thing. It's why you'd never forget to move your car before it gets towed.",
  },
  {
    n: "05",
    title: "The flip",
    body: "Screenly puts a little something on the line. Now the evening version of you has a reason to agree with the morning version — and every cent you don't lose stays yours.",
  },
];

const steps = [
  {
    n: "01",
    title: "Pick your leaks",
    body: "Choose the apps stealing your evenings and set a daily or hourly ceiling for each one.",
  },
  {
    n: "02",
    title: "Put money on it",
    body: "Stake an amount you'd hate to lose. Screenly holds it while your limit is live.",
  },
  {
    n: "03",
    title: "Break it, pay it",
    body: "Stay under and keep every cent. Blow past the limit and the stake is gone — no negotiating.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo iconSize="md" />
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#science" className="transition-colors hover:text-foreground">
              Science
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              Open Source <Github className="size-4" />
            </a>
          </div>
          <a
            href="#cta"
            className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Get Started <ArrowRight className="size-4" />
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="warm-glow pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
            <div>
              <span className="pill-glow inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_color-mix(in_oklab,var(--primary)_70%,transparent)]" />
                Real stakes, real focus
              </span>
              <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] sm:text-7xl">
                Make your day
                <br />
                <span className="text-primary">longer,</span>
              </h1>
              <p className="mt-4 font-display text-2xl font-medium text-muted-foreground sm:text-3xl">
                by reducing your screentime.
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Screenly helps you stay disciplined by backing your focus goals with real financial
                stakes.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#cta"
                  className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
                >
                  Get Started <ArrowRight className="size-4" />
                </a>
                <a
                  href="#science"
                  className="btn-outline-premium inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-medium text-foreground"
                >
                  Learn the Science <ArrowRight className="size-4" />
                </a>
              </div>

              <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6">
                {pillars.map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <dt className="text-sm font-semibold">{title}</dt>
                      <dd className="text-sm text-muted-foreground">{sub}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative min-w-0">
              <div className="relative pt-6">
                <PhoneMockup />
              </div>
              <div className="pointer-events-none mx-auto mt-[-2rem] h-10 w-3/4 rounded-[50%] bg-ink/15 blur-xl" />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="max-w-xl text-4xl font-bold">Three steps. One uncomfortable promise.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="card-premium rounded-3xl bg-card p-8">
                  <span className="font-display text-sm font-semibold text-primary">{s.n}</span>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="card-dark-premium flex flex-col justify-between rounded-3xl bg-ink p-10 text-background">
              <h2 className="text-4xl font-bold leading-tight">
                Willpower is a bad plan.
                <br />
                Money is a better one.
              </h2>
              <p className="mt-6 text-sm leading-relaxed opacity-70">
                Every limit you set is enforced at the OS level and locked behind a stake. No snooze
                button, no "just five more minutes."
              </p>
            </div>
            <div className="grid gap-6">
              {[
                {
                  t: "Hard locks, not nudges",
                  d: "Apps go dark the moment you hit the ceiling — not after a dismissible banner.",
                },
                {
                  t: "Escrowed stakes",
                  d: "Your money sits in escrow for the length of the challenge and returns automatically.",
                },
                {
                  t: "Weekly honesty report",
                  d: "See where the hours actually went, and what each slip cost you.",
                },
              ].map((f) => (
                <div key={f.t} className="card-premium rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Science — story */}
        <section id="science" className="border-y border-border bg-accent/50">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                The science, briefly
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Why a few dollars beats a lot of willpower.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                Losing something feels about twice as bad as gaining the same thing feels good.
                Screenly puts that instinct on your side.
              </p>
              <div className="card-premium mt-10 rounded-3xl bg-card p-8 text-center">
                <p className="font-display text-7xl font-extrabold tracking-tight text-primary sm:text-8xl">
                  +21%
                </p>
                <p className="mt-3 text-sm font-semibold leading-snug">
                  more follow-through when people commit money to their goals
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Randomized trial · 1,629 participants
                </p>
                <div className="mt-6 flex items-center justify-center gap-6 border-t border-border pt-5 text-xs text-muted-foreground">
                  <span>$1 minimum stake</span>
                  <span className="size-1 rounded-full bg-border" aria-hidden />
                  <span>2 minutes to set up</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative space-y-10">
                {storyBeats.map((beat) => (
                  <div key={beat.n} className="relative flex gap-6">
                    <span className="stat-premium flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card pt-px font-display text-sm font-bold text-primary shadow-card">
                      {beat.n}
                    </span>
                    <div className="min-w-0 pb-1">
                      <h3 className="font-display text-xl font-semibold">{beat.title}</h3>
                      <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
                        {beat.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-14 max-w-md border-l-2 border-primary pl-5 font-display text-2xl font-semibold leading-snug">
                Not more willpower. A better deal with yourself.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="mx-auto max-w-6xl px-5 py-24 text-center">
          <h2 className="font-display text-5xl font-extrabold leading-tight">
            Get your evenings back.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Set your first limit in under two minutes. Stake as little as five dollars.
          </p>
          <a
            href="#cta"
            className="btn-premium mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground"
          >
            Get Started <ArrowUpRight className="size-4" />
          </a>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <span className="flex items-center gap-2">
            <Hourglass className="size-4 text-primary" /> Screenly
          </span>
          <span>Open source. Built for people who want their hours back.</span>
        </div>
      </footer>
    </div>
  );
}
