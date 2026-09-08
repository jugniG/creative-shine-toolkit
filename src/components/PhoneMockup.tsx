import { useEffect, useState } from "react";
import { BarChart3, Home, Trophy, Plus, ChevronLeft, ChevronRight, UserPlus, Crown } from "lucide-react";

type AppRow = {
  name: string;
  limit: string;
  used: string;
  progress: number;
  danger?: boolean;
  tint: string;
  glyph: string;
};

const rows: AppRow[] = [
  {
    name: "YouTube",
    limit: "1h / day",
    used: "Limit reached",
    progress: 100,
    danger: true,
    tint: "bg-[oklch(0.55_0.22_28)]",
    glyph: "▶",
  },
  {
    name: "Chess",
    limit: "45m / day",
    used: "15m used",
    progress: 33,
    tint: "bg-[oklch(0.55_0.12_150)]",
    glyph: "♞",
  },
  {
    name: "X",
    limit: "5m / hr",
    used: "4m used",
    progress: 82,
    danger: true,
    tint: "bg-ink",
    glyph: "𝕏",
  },
];

const usageApps = [
  { name: "Instagram", time: "1h 42m", pct: 100, tint: "bg-[oklch(0.55_0.2_10)]", glyph: "◎" },
  { name: "YouTube", time: "1h 04m", pct: 63, tint: "bg-[oklch(0.55_0.22_28)]", glyph: "▶" },
  { name: "X", time: "38m", pct: 37, tint: "bg-ink", glyph: "𝕏" },
  { name: "Chess", time: "15m", pct: 15, tint: "bg-[oklch(0.55_0.12_150)]", glyph: "♞" },
];

const bars = [42, 68, 55, 80, 47, 62, 35];
const days = ["M", "T", "W", "T", "F", "S", "S"];

const leaders = [
  { name: "Aarav", time: "1h 12m", you: false },
  { name: "You", time: "2h 04m", you: true },
  { name: "Meera", time: "2h 38m", you: false },
  { name: "Dad", time: "3h 21m", you: false },
];

const TABS = [
  { label: "Screen time", icon: BarChart3 },
  { label: "Limits", icon: Home },
  { label: "Leaderboard", icon: Trophy },
];

const DURATION = 5000;

function ScreenTime() {
  return (
    <div className="px-4 pb-6">
      <div className="flex items-center justify-between px-1 pb-3">
        <div>
          <p className="text-xs text-muted-foreground">Today</p>
          <p className="font-display text-xl font-semibold text-foreground">3h 39m</p>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">
          <ChevronLeft className="size-3" />
          <span className="font-medium text-foreground">Sep 8</span>
          <ChevronRight className="size-3" />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-background p-3">
        <div className="flex h-24 items-end justify-between gap-1.5">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`w-full rounded-md ${i === 3 ? "bg-primary" : "bg-primary/25"}`}
                style={{ height: `${h}%` }}
              />
              <span className="text-[9px] text-muted-foreground">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 px-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        Most used
      </p>
      <div className="mt-2 space-y-2">
        {usageApps.map((a) => (
          <div key={a.name} className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5">
            <span className={`grid size-7 place-items-center rounded-lg text-xs text-primary-foreground ${a.tint}`}>
              {a.glyph}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{a.name}</span>
                <span className="text-[10px] text-muted-foreground">{a.time}</span>
              </div>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: `${a.pct}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Limits() {
  return (
    <>
      <div className="flex items-start justify-between px-5 pb-4">
        <div>
          <p className="text-xs text-muted-foreground">Good evening,</p>
          <p className="font-display text-base font-semibold text-foreground">Sahil</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary-foreground)_20%,transparent),0_4px_12px_-4px_color-mix(in_oklab,var(--primary)_60%,transparent),inset_0_1px_0_0_color-mix(in_oklab,var(--primary-foreground)_25%,transparent)]">
          <Plus className="size-3" /> Add App
        </span>
      </div>

      <div className="space-y-3 px-4 pb-6">
        {rows.map((row) => (
          <div
            key={row.name}
            className="rounded-2xl border border-border bg-background p-3 shadow-[0_4px_14px_-6px_color-mix(in_oklab,var(--ink)_12%,transparent),inset_0_1px_0_0_color-mix(in_oklab,var(--primary-foreground)_8%,transparent)]"
          >
            <div className="flex items-center gap-3">
              <span className={`grid size-8 place-items-center rounded-lg text-sm text-primary-foreground ${row.tint}`}>
                {row.glyph}
              </span>
              <span className="flex-1 text-sm font-medium text-foreground">{row.name}</span>
              <span className="text-xs text-muted-foreground">{row.limit}</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full ${row.danger ? "bg-destructive" : "bg-primary"}`}
                style={{ width: `${row.progress}%` }}
              />
            </div>
            <p className={`mt-1.5 text-right text-[10px] ${row.danger ? "text-destructive" : "text-muted-foreground"}`}>
              {row.used}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function Leaderboard() {
  return (
    <div className="px-4 pb-6">
      <div className="flex items-center justify-between px-1 pb-3">
        <div>
          <p className="text-xs text-muted-foreground">This week</p>
          <p className="font-display text-base font-semibold text-foreground">Family circle</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1.5 text-[10px] font-semibold text-primary-foreground">
          <UserPlus className="size-3" /> Invite
        </span>
      </div>

      <div className="rounded-2xl border border-primary/40 bg-primary/10 p-3">
        <div className="flex items-center gap-2">
          <Crown className="size-4 text-primary" />
          <span className="flex-1 text-sm font-semibold text-foreground">Aarav is winning</span>
          <span className="text-xs font-medium text-primary">1h 12m</span>
        </div>
        <p className="mt-1 text-[10px] text-muted-foreground">Lowest screentime takes the pot on Sunday.</p>
      </div>

      <div className="mt-3 space-y-2">
        {leaders.map((l, i) => (
          <div
            key={l.name}
            className={`flex items-center gap-3 rounded-xl border p-2.5 ${
              l.you ? "border-primary/50 bg-background" : "border-border bg-background"
            }`}
          >
            <span className="grid size-6 place-items-center rounded-full bg-muted text-[10px] font-semibold text-foreground">
              {i + 1}
            </span>
            <span className="flex-1 text-xs font-medium text-foreground">{l.name}</span>
            <span className="text-[10px] text-muted-foreground">{l.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const screens = [
  { Screen: ScreenTime, label: "Screen time" },
  { Screen: Limits, label: "Limits" },
  { Screen: Leaderboard, label: "Leaderboard" },
];

function Phone({ children, activeTab }: { children: React.ReactNode; activeTab: number }) {
  return (
    <div className="relative mx-auto w-[280px] rounded-[2.6rem] border-[10px] border-ink bg-ink shadow-soft bezel-glow sm:w-[320px]">
      <div className="glass-reflection overflow-hidden rounded-[2rem] bg-card">
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-muted-foreground">
          <span>7:24</span>
          <span className="tracking-tight">••• ▲ ▮</span>
        </div>

        <div className="min-h-[460px] pt-4">{children}</div>

        <div className="flex items-center justify-around border-t border-border py-3 text-[9px]">
          {TABS.map((t, i) => {
            const Icon = t.icon;
            return (
              <span
                key={t.label}
                className={`flex flex-col items-center gap-0.5 ${
                  i === activeTab ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className="size-4" /> {t.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function PhoneMockup() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % screens.length), DURATION);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="phone-aurora">
      <div className="overflow-hidden px-2 py-4">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {screens.map(({ Screen }, i) => (
            <div
              key={i}
              className={`w-full shrink-0 transition-all duration-700 ${
                i === active ? "scale-100 opacity-100 blur-0" : "scale-90 opacity-40 blur-[1px]"
              }`}
            >
              <Phone activeTab={i}>
                <Screen />
              </Phone>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2.5">
        {screens.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={s.label}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-7 bg-primary shadow-[0_0_10px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
                : "w-2 bg-border hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

