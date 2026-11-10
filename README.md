# StudentHub

A personal student operating system: tasks, events, courses, projects, notes,
goals, habits, and a public portfolio in one app.

## Status

**Phase 0 · Step 1 — Scaffold complete.**

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui initialized (`Button` installed)
- Prisma, TanStack Query, React Hook Form, Zod, FullCalendar installed
- Deployed on Vercel (repo connected for preview + production deploys)

Database schema, auth, and feature work begin in Step 2.

## Stack

| Layer      | Choice                                  |
| ---------- | --------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)      |
| Language   | TypeScript                              |
| Styling    | Tailwind CSS v4 + shadcn/ui             |
| ORM        | Prisma 7 (PostgreSQL)                   |
| Data       | TanStack Query v5                       |
| Forms      | React Hook Form + Zod                   |
| Calendar   | FullCalendar v7                         |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Purpose                  |
| -------------- | ------------------------ |
| `npm run dev`  | Start the dev server     |
| `npm run build`| Production build         |
| `npm start`    | Serve the production app |
| `npm run lint` | Run ESLint               |
