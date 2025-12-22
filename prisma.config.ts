import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    // Use DIRECT_URL for Prisma CLI (migrations/introspection)
    url: env("DIRECT_URL"),
  },
});
