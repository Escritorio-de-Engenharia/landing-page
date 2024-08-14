/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    basePath: "/landing-page",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
