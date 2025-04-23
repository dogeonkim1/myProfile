import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    // output: "export",
    basePath: isProd ? "" : "",
    assetPrefix: isProd ? "" : "",
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true, // Vercel 빌드 시 ESLint 오류 무시
    },
};

export default nextConfig;