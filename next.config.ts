import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/Careinnovations" : "",
  assetPrefix: isGithubPages ? "/Careinnovations/" : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: isGithubPages,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
