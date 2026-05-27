import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't pick up the stray
  // package-lock.json at C:\Users\tyler\. See CLAUDE.md §10.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
