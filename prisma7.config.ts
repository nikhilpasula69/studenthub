import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

// Next.js loads `.env.local`; Prisma 7 no longer loads env files automatically,
// so load the same file before resolving datasource URLs.
config({ path: ".env.local", quiet: true });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Prisma 7 removed `directUrl` from the schema datasource block. The CLI
    // uses this URL for migrations/introspection, so point it at the direct
    // (non-pooled) Neon connection. Runtime queries use DATABASE_URL through
    // the pg driver adapter in lib/prisma.ts.
    url: env("DIRECT_URL"),
  },
});
