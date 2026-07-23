import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/dashboard",
                permanent: true,
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "*.kakaocdn.net",
            }
        ]
    }

};

export default nextConfig;
