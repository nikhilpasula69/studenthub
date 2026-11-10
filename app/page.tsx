import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FolderKanban,
  Target,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const modules = [
  {
    icon: CheckCircle2,
    title: "Tasks",
    description: "Plan coursework, subtasks, and deadlines.",
  },
  {
    icon: CalendarDays,
    title: "Calendar",
    description: "Track classes, exams, and recurring events.",
  },
  {
    icon: BookOpen,
    title: "Courses",
    description: "Keep syllabi, attendance, and notes together.",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description: "Build a public portfolio from real work.",
  },
  {
    icon: Target,
    title: "Goals & Habits",
    description: "Turn semester goals into daily progress.",
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Showcase awards, internships, and leadership.",
  },
];

const stack = [
  "Next.js 16 · App Router",
  "TypeScript · strict mode",
  "Tailwind CSS v4",
  "shadcn/ui",
  "Prisma + PostgreSQL",
  "TanStack Query",
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(ellipse_at_top,var(--color-muted),transparent_65%)]"
      />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="size-4" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            StudentHub
          </span>
        </div>
        <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
          Phase 0 · Step 1
        </span>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-6 pt-16 pb-24 text-center sm:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Scaffold deployed and ready
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Your entire student life, in one place.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          StudentHub brings tasks, events, courses, projects, notes, goals, and
          habits together — with a public portfolio that grows as you do.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="px-5" disabled>
            Dashboard coming next
          </Button>
          <Button size="lg" variant="outline" className="px-5" asChild>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js docs
            </a>
          </Button>
        </div>

        <div className="mt-20 grid w-full gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-xs"
            >
              <Icon className="size-5 text-muted-foreground" />
              <h2 className="mt-4 font-medium">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>StudentHub · personal student operating system</span>
          <span>Built with Next.js + shadcn/ui</span>
        </div>
      </footer>
    </div>
  );
}
